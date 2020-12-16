import React from "react";
import classes from "../Media.module.css";
import utube from "./Youtube.module.css";
import logo from "../../../assets/icon-youtube.svg";
import icon from "../../../assets/icon-down.svg";

const YouTube = (props) => {
  return (
    <div className={classes.AllMedia}>
      <hr className={utube.Hr} />
      <div className={classes.UserName}>
        <img src={logo} alt="youtube-logo" />
        <span>Nathan F.</span>
      </div>
      <div>
        <h1>{props.youtube}</h1>
        <p>SUBSCRIBERS</p>
      </div>
      <div className={classes.Ratings}>
        <div>
          <img src={icon} alt="up arrow" />
        </div>
        <div className={classes.RedPercentage}>144 Today</div>
      </div>
    </div>
  );
};
export default YouTube;
