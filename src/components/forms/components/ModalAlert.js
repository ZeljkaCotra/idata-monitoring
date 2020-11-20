import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SweetAlert from "react-bootstrap-sweetalert";

export default function ModalAlert(props) {   
  if(props.isWarning) {
    return (
      <SweetAlert
          show={props.isModalOpen}
          warning
          showCancel
          confirmBtnText="Continue"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          focusCancelBtn
          onCancel={props.handleModalOpening}
          onEscapeKey={props.handleModalOpening}
          onOutsideClick={props.handleModalOpening}
          onConfirm={props.handleDelete}
      >
          You will delete {props.modalRowName} dataset
      </SweetAlert>
  );
  }
  if(props.isSuccess) {
    return (
      <SweetAlert
        show={props.isModalOpen}
        success 
        title= ""
        onConfirm={props.handleModalOpening} 
        onCancel={props.handleModalOpening}
      >
        {props.modalRowName} dataset successfully deleted.
      </SweetAlert>
    );
  }
  if(props.isError) {
    return (
      <SweetAlert 
        title= "Error"
        show={props.isModalOpen} 
        onConfirm={props.handleModalOpening} 
        onCancel={props.handleModalOpening}
      >
        There was a problem during update of {props.datasetName} dataset.
      </SweetAlert>
    );
  }
  if(props.isSubmitError) {
    return (
      <SweetAlert 
        title= "Submit error"
        show={props.isModalOpen} 
        onConfirm={props.handleModalOpening} 
        onCancel={props.handleModalOpening}
      >
        There was a problem during the saving process of {props.datasetName} dataset.
        Error: {props.updateError.message}
      </SweetAlert>
    );
  }
  if(props.returnModal && props.returnModal === "progres") {
    return (
      <SweetAlert 
        title= "File is being processed"
        show={props.loadingGlueSchema} 
        showCancelButton= {false} 
        showConfirmButton= {false} 
        confirmBtn = {false}
        buttons= {false}
        closeOnClickOutside= {false}
        onConfirm={() => console.log("x")}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </SweetAlert>
    );
  }
  if(props.isSaving) {
    return (
      <SweetAlert 
        title= "Dataset is being saved..."
        show={props.datasetSaving} 
        showCancelButton= {false} 
        showConfirmButton= {false} 
        confirmBtn = {false}
        buttons= {false}
        closeOnClickOutside= {false}
        onConfirm={() => console.log("x")}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Dataset is being saved...</span>
        </div>
      </SweetAlert>
    );
  }
}