import React from "react";
import classes from "./CssInput.module.css";
import Grid from '@material-ui/core/Grid';

const CssInput = (props) => {
  return (
    <Grid container className={classes.CssInput} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={6}>
          <Grid key={"textarea1"} item>
            <form onSubmit={props.submit}>
              <textarea placeholder="Copy and paste your CSS code here!"/>
            </form>
          </Grid>
          <Grid key={"textarea2"} item>
            <textarea placeholder="Minified CSS will appear here."/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )};

export default CssInput;
