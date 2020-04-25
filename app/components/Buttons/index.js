import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { MDBBtn, MDBIcon } from "mdbreact";
import Spinner from "../Loders/LodersAndPleasewait/Spinner";
import "./style.css";

const CustomButton = props => {
  return props.icon && props.name ? (
    <MDBBtn
      id={props.id}
      rounded
      //floating
      onClick={props.handleClick ? props.handleClick : () => {}}
      disabled={props.disabled}
      className={"px-3 m-2 " + props.className}
      title={props.title}
      type={props.type}
    >
      {props.isLoading ? (
        <Spinner SpinnerInsideButton height={25} width={25} />
      ) : (
        <div>
          <MDBIcon className="mr-2 py-1" icon={props.icon} />
          {props.name}
        </div>
      )}
    </MDBBtn>
  ) : props.icon ? (
    <MDBBtn
      id={props.id}
      rounded
      //floating
      onClick={props.handleClick ? props.handleClick : () => {}}
      disabled={props.disabled}
      size="sm"
      className={props.className}
      //color="primary"
      title={props.title}
      type={props.type}
    >
      <MDBIcon className="iconStyle" icon={props.icon} size="sm" />
    </MDBBtn>
  ) : (
    <MDBBtn
      id={props.id}
      rounded
      //floating
      onClick={props.handleClick ? props.handleClick : () => {}}
      disabled={props.disabled}
      className={props.className}
      title={props.title}
      type={props.type}
    >
      {props.isLoading ? (
        <Spinner SpinnerInsideButton height={25} width={25} />
      ) : (
        props.name
      )}
    </MDBBtn>
  );
};
export default CustomButton;
