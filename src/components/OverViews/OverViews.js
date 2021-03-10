import React from "react";
import OverView from "./OverView/OverView";
import classes from "./OverViews.module.css";

function OverViews(props) {
  return (
    <div className={classes.OverView}>
      <h1>OverView - Today</h1>
      <OverView media={props.media} />
    </div>
  );
}

export default OverViews;
