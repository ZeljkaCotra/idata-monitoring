import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import {OverlayTrigger, Tooltip } from "react-bootstrap";
import {BootstrapTable as BTable, TableHeaderColumn} from "react-bootstrap-table";
/**
 * @componentName Monitoring page
 * @description This is a component responsible for all tables that aprears in app
 */
const stateType = {
  'All': '',
  'end': 'end',
  'begin': 'begin',
  "processing": "processing"
};

class MonitoringPage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.tooltipCopyFormatter = this.tooltipCopyFormatter.bind(this);
    this.formatCopyData = this.formatCopyData.bind(this);
    this.state = {
      pipelineToken: "",
      popoverOpen: false,
      columnWidths: [178.05,160,190,190,190,100,100,200,50]
    };
  }
  
  enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
  };

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  };

  columnHover = (cell, row, enumObject, rowIndex) => {
    return cell;
  };

  showCopyIcn(e) {
    this.setState({showCopyIcon : true});
  };

  tooltipFormatter(cell, row) {
    return (
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id={String(row.id)}>{cell}</Tooltip>}
      >
        <span>{cell}</span>
      </OverlayTrigger>
    );
  };

  formatCopyData = (data) => {
    delete data.id;
    delete data.copy;

    let formatedData = JSON.stringify(data, null, 2).replace(/["{[,}\]]/g, "");
    let x = formatedData.replace(/\\n/g,"");
    return x.replace(/\\t/g,"");
  };

  copyToClipboard(text) {
    if (typeof(navigator.clipboard)=='undefined') {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position="fixed"; 
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('copy');
      } catch (err) {
          console.log('Was not possible to copy te text: ', err);
      }
      document.body.removeChild(textArea);            
      return;
    }
    navigator.clipboard.writeText(text).then(function() {   
    }, function(err) {
      console.log('unsuccessful!', err);
    });
  };

  tooltipCopyFormatter(cell, row) {
    let formatedData = this.formatCopyData(row);
    return (
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id={String(row.id)}>Copy</Tooltip>}
      >
        <span><i className="fa fa-copy" onClick={() => {this.copyToClipboard(formatedData); alert(formatedData)}}></i></span>
      </OverlayTrigger>
    );
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.filterKeyword) {
      this.refs.stateNameCol.applyFilter(nextProps.filterKeyword);  
    }
    if(nextProps.filterProcessKeyword === "")
      this.refs.processNameCol.applyFilter(nextProps.filterProcessKeyword);
    if (nextProps.filterProcessKeyword) { 
      this.refs.processNameCol.applyFilter(nextProps.filterProcessKeyword); 
    }
  };


  componentDidMount() {
    for (let index = 0; index < 12; index += 1) {
      if (window.$(`.react-bs-container-header .table th:eq(${index})`).length === 0) break;
      window.$(`.react-bs-container-header .table th:eq(${index})`).resizable({
        minWidth: 50,
        handles: 'e',
        resize: (__event, ui) => {
          const newColumnWidths = [...this.state.columnWidths];
          newColumnWidths[index] = ui.size.width;
          this.setState({ columnWidths: newColumnWidths });
        },
      });  
    }
  };

  render() {
    const { columns, dataSource } = this.props;
    const selectRow = this.props.isSelect;
    const keyField = this.props.keyField;
    this.props.dataSource.forEach(function (element) {
      element.copy = "true";
    });
    const tableRowEvents = {
      onClick: (e, row, rowIndex) => {
        if('pipelineToken' in row) {
          this.props.setRefreshToken(row.pipelineToken);
          this.props.pipelineToken(row.pipelineToken);
        }
      }
    };

    const select = {
      mode: "checkbox",
      clickToSelect: true,
      hideSelectAll: true,
      style: { width: '2%' },
      onSelect: (row, isSelect, rowIndex, e) => {
        if('pipelineToken' in row) {
		  this.props.setRefreshToken(row.pipelineToken);
          this.props.pipelineToken(row.pipelineToken);
          this.props.onTurn("logs");
        }
      },
    };

    if (selectRow) {
        return (
          <div className="container table-responsive">
            <BootstrapTable
              bootstrap4
              keyField={keyField}
              bordered={false}
              striped={true}
              hover={true}
              selectRow={select}
              data={dataSource}
              sort = {{dataField: "endTime", order: "desc"}}
              columns={columns}
              filter={filterFactory()}
              rowEvents={tableRowEvents }
              headerClasses ="custom-row-class"
            />
          </div>
        );
    } else {
      return (
        <div className="table-responsive">
        <BTable
          data={this.props.dataSource}
          bordered={false}
          striped={true}
          hover={true}
          dataFormat={this.props.dataFormat}
          filter={filterFactory()}
          containerStyle={{ width: "1424.371"}}
          tableStyle={{}}
          bodyStyle={{}} 
          headerStyle={{}}
        >
          <TableHeaderColumn dataField="sqsDateTime" dataFormat={this.tooltipFormatter} dataSort={true} thStyle={{width:`${this.state.columnWidths[0]}px`, border:"1px solid white"}} tdStyle={{width:`${this.state.columnWidths[0]}px`}}>
            TIME
          </TableHeaderColumn>  
          <TableHeaderColumn isKey={true} dataField="processName" dataFormat={this.tooltipFormatter} dataSort={true} thStyle={{width:`${this.state.columnWidths[1]}px`, border:"1px solid white"}} tdStyle={{width:`${this.state.columnWidths[1]}px`}}  ref='processNameCol' filter={{ type: 'TextFilter', defaultValue: '' }}>
            PROCESS
          </TableHeaderColumn>
          <TableHeaderColumn dataField="publisherToken" dataSort={true}  dataFormat={this.tooltipFormatter}  thStyle={{width:`${this.state.columnWidths[2]}px`, border:"1px solid white"}} tdStyle={{width:`${this.state.columnWidths[2]}px`}} >
            PUBLISHER TOKEN
          </TableHeaderColumn>
          <TableHeaderColumn dataField="pipelineToken" dataSort={true} dataFormat={this.tooltipFormatter} thStyle={{width:`${this.state.columnWidths[3]}px`, border:"1px solid white"}} tdStyle={{width:`${this.state.columnWidths[3]}px`}}>
            PIPELINE TOKEN
          </TableHeaderColumn>
          <TableHeaderColumn dataField="filename" dataSort={true} dataFormat={this.tooltipFormatter} thStyle={{width:`${this.state.columnWidths[4]}px`, border:"1px solid white"}} tdStyle={{width:`${this.state.columnWidths[4]}px`}}>
            FILENAME
          </TableHeaderColumn>
          <TableHeaderColumn dataField="state" thStyle={{width:`${this.state.columnWidths[5]}px`,  border:"1px solid white"}} tdStyle={{width: `${this.state.columnWidths[5]}px`}} dataSort={true} ref='stateNameCol' filterFormatted dataFormat={ this.enumFormatter }
                formatExtraData={ stateType } filter={ { type: 'SelectFilter', options: stateType } }>
            STATE
          </TableHeaderColumn>
          <TableHeaderColumn dataField="code" dataFormat={this.tooltipFormatter} dataSort={true} thStyle={{width:`${this.state.columnWidths[6]}px`, border:"1px solid white"}} tdStyle={{width:`${this.state.columnWidths[6]}px`}}>
            CODE
          </TableHeaderColumn>
          <TableHeaderColumn dataField="description" dataSort={true} dataFormat={this.tooltipFormatter} thStyle={{width:`${this.state.columnWidths[7]}px`, border:"1px solid white"}} tdStyle={{width: `${this.state.columnWidths[7]}px`}} >
            DESCRIPTION
          </TableHeaderColumn>
          <TableHeaderColumn dataField="copy"  dataFormat={this.tooltipCopyFormatter} thStyle={{width:`${this.state.columnWidths[8]}px`, border:"1px solid white"}} tdStyle={{width: `${this.state.columnWidths[8]}px`}}>
          </TableHeaderColumn>
        </BTable>
      </div>
      );
    }
  }
}

export default MonitoringPage;
