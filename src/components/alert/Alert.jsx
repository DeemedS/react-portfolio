import React from 'react'
import './alert.css'
import { useState, forwardRef, useImperativeHandle } from "react";

const Alert = forwardRef((props, ref) => {
    const [showAlert, setShowAlert] = useState(false);
  
    useImperativeHandle(ref, () => ({
      show() {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
      },
    }));
    
    return (
      <div
        className="alert"
        id={showAlert ? "show" : "hide"}
        style={{
          backgroundColor: props.type === "success" ? "#52e9aa" : "#FF0033",
          color: props.type === "success" ? "black" : "white",
        }}
      >
        <div className="symbol">
          {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
        </div>
        <div className="message">{props.message}</div>
      </div>
    );
  });
  
  export default Alert;