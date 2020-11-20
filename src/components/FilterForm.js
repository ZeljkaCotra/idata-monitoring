import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import IconButton from '@material-ui/core/IconButton';
/**
 * @componentName Filter form component
 * @description Component responsible for filtering table data based on process name, status etc.
 */
class FilterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  change = (event) => { 
    if(event.target.placeholder === "Process name") {
      this.props.callFilterProcess(event.target.value);
      this.setState({value: event.target.value});
    }
    else {
      this.props.callFilterStatus(event.target.value);
      this.setState({value: event.target.value});
    }
  }

  render() {
    const tabSelect = this.props.tabSelect;
    const onChange = this.props.onChange;
    if (tabSelect === "Data") {
      return (
        <Form className="form-inline datasetForm" role="form">
          <Form.Row className="row d-flex dtSetRow" >
            <Form.Group controlId="formGridDatasetName" className="form-group form-dataset-name">
              <Form.Label className="col-md-auto control-label formLabel">
                Dataset name
              </Form.Label>
              <div className="col colDts">
                <Form.Control
                  placeholder="Enter dataset name"
                  className="form-control-static selectOpt"
                  onChange={onChange}
                />
              </div>
            </Form.Group> 
            {!this.props.author && (
            <Form.Group controlId="formGridResult" className="form-group flex-grow-1 mr-auto form-group">
              <Form.Label className="col-md-auto control-label formLabel">
                Status
              </Form.Label>
              <div className="col colRsp">
                <Form.Control
                  as="select"
                  defaultValue="All"
                  className="form-control-static selectOpt"
                  onChange={onChange}
                >
                  <option>All</option>
                  <option>Info</option>
                  <option>Warning</option>
                  <option>Error</option>
                </Form.Control>
              </div>
              <div className="refreshBtnDiv" onClick = {this.props.loadMoreData()}>
                <IconButton aria-label="refresh" className= "refreshBtn" size="small">
                  <i className="fa fa-refresh float-right" aria-hidden="true"></i>
                </IconButton>
              </div>
            </Form.Group>
            )}

            {this.props.author && (
              <Form.Group controlId="formBtn" className="form-group flex-grow-1 mr-auto">
                <div className="col col-new-dataset">
                  <Button className="btn btn-primary float-right" onClick={this.props.addNewDataset}>
                    New dataset
                  </Button>
                </div>
              </Form.Group>
            )}
          </Form.Row>
        </Form>
      );
    }
    if (tabSelect === "Logs") {
      return (
        <Form className="form-inline" role="form">
          <Form.Row className="row d-flex dtSetRow form-row">
          <Form.Group controlId="formBtn" className="form-group">
                <div className="col">
                  <svg width="2.3em" height="2.3em" viewBox="0 0 16 16" className="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={event =>  window.location.href='/'}>
                    <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                  </svg>
                </div>
              </Form.Group>
            <Form.Group
              controlId="formGridState"
              className="form-group logsGroup"
            >
              <Form.Label className="col formLabel">
                State
              </Form.Label>
              <div className="col colLog">
                <Form.Control
                  as="select"
                  className="form-control-static selectOptState"
                  onChange={this.change}
                  value={this.state.value}
                >
                  <option value="All">All</option>
                  <option value="end">End</option>
                  <option value="begin">Begin</option>
                  <option value="processing">Processing</option>
                </Form.Control>
              </div>
            </Form.Group>

            <Form.Group controlId="formGridLogsName" className="form-group flex-grow-1 mr-auto form-group form-group">
              <Form.Label className="col-md-auto control-label formLabel form-label">
                Process name
              </Form.Label>
              <div className="col colLog">
                <Form.Control
                  placeholder="Process name"
                  className="form-control-static selectOpt form-control processFilter"
                  onChange={this.change}
                  style = {{width:"95%"}}
                />
              </div>
              <div className="refreshBtnDiv" onClick = {() => this.props.pipelineToken(this.props.refreshToken)}>
                <IconButton aria-label="refresh" className= "refreshBtn" size="small">
                  <i className="fa fa-refresh float-right" aria-hidden="true"></i>
                </IconButton>
              </div>
            </Form.Group>
          </Form.Row>
        </Form>
      );
    }
  }
}

export default FilterForm;
