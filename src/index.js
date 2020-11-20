import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    console.disableYellowBox = true;
  
    return promiseInProgress && 
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader type="ThreeDots" color="#343a40" height="50" width="50" />
      </div>
  };

ReactDOM.render( <div><App /><LoadingIndicator/></div>, document.getElementById('root'));


//ReactDOM.render(
//  <React.StrictMode>
//    <App />  
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
