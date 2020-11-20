import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import axios from "axios";
import { trackPromise } from 'react-promise-tracker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**
 * @componentName App component
 * @description Main component in app which acts as a container for all other components
 */
const ACCESS_KEY_ID = process.env.REACT_APP_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
const REGION = process.env.REACT_APP_REGION;
const ENDPOINT = process.env.REACT_APP_AWS_ENDPOINT;
const X_API_KEY = process.env.REACT_APP_X_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: [],
      newDataSource: [],
      isEmptyState: true,
      isAddTripState: false,
      showErrorAlert: false
    };
  }

  fetchData() {
    trackPromise(
      axios
        .get("https://" + ENDPOINT, { headers: { "X-API-Key": X_API_KEY}})
        .then((res) => {
          const dataset = res.data;
          this.setState({dataset});
        })
        .catch((err) => {
          console.log(err);
      }));
  }

  setupAWSSdk() {
    let AWS = require('aws-sdk'); 
    AWS.config = new AWS.Config();
    AWS.config.accessKeyId = ACCESS_KEY_ID;
    AWS.config.secretAccessKey = SECRET_ACCESS_KEY;
    AWS.config.region = REGION;
    return AWS;
  }

  async getDynamoDbData() {
    let AWS = this.setupAWSSdk();
    AWS.config.update({dynamoDbCrc32: false});
    let docClient = new AWS.DynamoDB.DocumentClient();

    try {
      let params = {
          TableName: 'edl-dataset',
      };
      let result = await docClient.scan(params).promise()
      this.setState({newDataSource: result["Items"]})
    } catch (error) {
      console.error(error);
      } 
  }

  componentDidMount() {
    this.getDynamoDbData();
    this.fetchData();
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      isEmptyState: true,
      isAddTripState: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <Router>
          <Nav onClick={() => this.handleClick.bind(this)} />
          <Switch>
            <Route exact path="/">
              <Dashboard
                isDataset={false}
                isAddTripState={false}
                dataSource={this.state.dataset}
                loadMoreData={() => this.fetchData.bind(this)}
                />
            </Route>
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
