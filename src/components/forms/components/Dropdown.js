import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <span className="threedots" />
  </a>
));
export default function DropdownDots(props) {   
  return (
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} />
        <Dropdown.Menu size="sm" title="">
          <Dropdown.Item onClick={()=> props.handleUpdate(props.record)}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={()=> props.togglePopup(props.record.name)}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}