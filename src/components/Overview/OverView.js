import React from "react";
import OverView1 from "./OverView1/OverView1";
import OverView2 from "./OverView2/OverView2";

import classes from "./OverView.module.css";

function Overview(props) {
  return (
    <div className={classes.OverView}>
      <h1>OverView - Today</h1>
      <div className={classes.Test}>
        <OverView1 media={props.media} />
        <OverView2 media={props.media} />
      </div>
    </div>
  );
}

export default Overview;
