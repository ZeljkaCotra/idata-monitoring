import React, { Component } from "react";
import axios from "axios";
import FilterForm from "./FilterForm";
import MonitoringPage from "./MonitoringPage";
import { customFilter } from "react-bootstrap-table2-filter";
import { COLUMNS_LOGS } from "../constants";
import { trackPromise } from 'react-promise-tracker';
/**
 * @componentName Dashboard component
 * @description Main component in app which renders all other components
 */

const ACCESS_KEY_ID = process.env.REACT_APP_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
const REGION = process.env.REACT_APP_REGION;
const ENDPOINT = process.env.REACT_APP_AWS_ENDPOINT;
const X_API_KEY = process.env.REACT_APP_X_API_KEY;


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.showError = React.createRef();
    this.state = {
      mounted: false,
      applyFilter: false,
      filterKeyword: "",
      filterProcessKeyword: "",
      columnSelected: false,
      key: "data",
      i: 0,
      filterValue: "",
      refreshToken: "",
      datasets: [],
      dataSourceLogs: [],
    };
  }

  onResultFilter = null;
  onStatusFilter = null;
  onDsNameFilter = null;
  onStateFilter = null;
  onProcessFilter = null;

  columnsData = [
    {
      dataField: "pipelineToken",
      hidden: true,
    },
    {
      dataField: "dataset",
      text: "DATASET",
      filter: customFilter(),
      sort: true,
      filterRenderer: (onFilter, column) => {
        this.onDsNameFilter = onFilter;
        return null;
      },
      onSelect: (row, isSelect, rowIndex, e) => {
        this.setState({ columnSelected: true });
        this.setState({ key: "logs" });
      },
    },
    {
      dataField: "process",
      text: "CURRENT PROCESS",
    },
    {
      dataField: "startTime",
      text: "START TIME",
    },
    {
      dataField: "endTime",
      text: "END TIME",
    },
    {
      dataField: "totalTime",
      text: "TOTAL TIME",
    },
    {
      dataField: "status",
      text: "STATUS",
      filter: customFilter(),
      filterRenderer: (onFilter, column) => {
        this.onResultFilter = onFilter;
        return null;
      },
    },
  ];

  componentDidUpdate(prevProps) {
    if (JSON.stringify(this.props.dataSource) !== JSON.stringify(prevProps.dataSource)) {
      this.setState({ datasets: this.props.dataSource });
    }
  };

  setupAWSSdk() {
    let AWS = require('aws-sdk');
    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = ACCESS_KEY_ID;
    AWS.config.secretAccessKey = SECRET_ACCESS_KEY;
    AWS.config.region = REGION;
    return AWS;
  };

  onValueChange = (event) => {
    let valueAll = "";
    let targetId = event.target.id;
    const { value } = event.target;

    if (targetId === "formGridResult") {
      if (value !== "All") {
        valueAll = value;
      }
      this.onResultFilter(valueAll);
    }
    if (targetId === "formGridStatus") {
      if (value !== "All") {
        valueAll = value;
      }
      this.onStatusFilter(valueAll);
    }
    if (targetId === "formGridDatasetName") {
      if (value !== "All") {
        valueAll = value;
      }
      this.onDsNameFilter(valueAll);
    }
  };


  setActive(activeId) {
    this.setState({ active: activeId });
  };

  onTurn(id) {
    this.setState({ key: id });
  };
 
  alreadyMounted(mounted) {
    this.setState({ mounted: mounted })
  };

  setRefreshToken(token) {
    this.setState({ refreshToken: token })
  };

  callFilterStatus(newKeyword) {
    this.setState({ applyFilter: true, filterKeyword: newKeyword });
  };

  callFilterProcess(newKeyword) {
    this.setState({ applyFilter: true, filterProcessKeyword: newKeyword });
  };

  fetchLogsData(pipelineToken) {
    trackPromise(
      axios
        .get(
          "https://" + ENDPOINT +
          pipelineToken,
          {
            headers: {
              "X-API-Key": X_API_KEY,
            }
          }
        )
        .then((res) => {
          this.setState({ dataSourceLogs: res.data });
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };


  render() {
    const dataSource = this.state.datasets;
    let datasetNames = [];
    dataSource.forEach((data) => {
      datasetNames.push(data.name);
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 tabWrapper">
            {this.state.key === "data" && (
              <div className="container-fluid tabCont">
                <FilterForm
                  tabSelect="Data"
                  author={false}
                  onChange={this.onValueChange}
                  loadMoreData={this.props.loadMoreData}
                />
                <MonitoringPage
                  keyField="pipelineToken"
                  columns={this.columnsData}
                  dataSource={dataSource}
                  isSelect={true}
                  onTurn={this.onTurn.bind(this)}
                  pipelineToken={this.fetchLogsData.bind(this)}
                  setRefreshToken={this.setRefreshToken.bind(this)}
                />
              </div>
            )}
            {this.state.key === "logs" && (
              <div className="container-fluid tabCont">
                <FilterForm
                  tabSelect="Logs"
                  callFilterStatus={this.callFilterStatus.bind(this)}
                  callFilterProcess={this.callFilterProcess.bind(this)}
                  loadMoreData={this.props.loadMoreData}
                  refreshToken={this.state.refreshToken}
                  pipelineToken={this.fetchLogsData.bind(this)}

                />
                <MonitoringPage
                  keyField="pipelineToken"
                  columns={COLUMNS_LOGS}
                  resizable={true}
                  dataSource={this.state.dataSourceLogs}
                  applyFilter={this.state.applyFilter}
                  filterKeyword={this.state.filterKeyword}
                  filterProcessKeyword={this.state.filterProcessKeyword}
                  setRefreshToken={this.setRefreshToken.bind(this)}
                  setActive={this.setActive}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  }
export default Dashboard;
