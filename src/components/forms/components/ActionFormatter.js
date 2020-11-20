import React, { Component } from "react";

class ActionFormatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
     showModal: false,
     selectedRow: null
    };
   }
 
   openModal() {
    this.setState((prevState, props) => {
     return { 
      selectedRow: props.row,
      showModal: true
     }
    });
   }
 
   isObjectEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
     return false;
    }
 
    for (var i = 0; i < aProps.length; i++) {
     var propName = aProps[i];
     if (a[propName] !== b[propName]) {
      return false;
     }
    }
    return true;
   }
 
   render() {
     return ( 
      <div>
          <button onClick = {this.openModal.bind(this)} className = "btn btn-default"> Add Projects </button> 
          {this.state.showModal && this.isObjectEquivalent(this.props.row, this.state.selectedRow) ? ( <div></div>) : null} 
        </div>
      );
   }
}

  export default ActionFormatter;