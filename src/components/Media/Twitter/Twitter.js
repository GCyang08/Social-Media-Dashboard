import React from "react";
import classes from "../Media.module.css";
import tweet from "./Twitter.module.css";
import logo from "../../../assets/icon-twitter.svg";
import icon from "../../../assets/icon-up.svg";

const Twitter = (props) => {
  return (
    <div className={classes.AllMedia}>
      <hr className={tweet.Hr} />
      <div className={classes.UserName}>
        <div>
          <img src={logo} alt="twitter-logo" />
        </div>
        <div>
          <span>@nathanf</span>
        </div>
      </div>
      <h1>{props.twitter}</h1>
      <p>FOLLOWERS</p>
      <div className={classes.Ratings}>
        <div>
          <img src={icon} alt="up arrow" />
        </div>
        <div className={classes.GreenPercentage}>
          <div>99 Today</div>
        </div>
      </div>
    </div>
  );
};
export default Twitter;
