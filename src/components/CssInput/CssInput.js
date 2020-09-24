import React from "react";
import classes from "./CssInput.module.css";

const CssInput = (props) => {
  return (
    <div className={classes.MagInput}>
      <form onSubmit={props.submit}>
        <textarea type="text" value="Copy & Paste your CSS here!" onChange="" />
        <br />
        <br />
      </form>
    </div>
  );
};

export default CssInput;
