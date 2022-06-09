import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("buton çalıştı");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
