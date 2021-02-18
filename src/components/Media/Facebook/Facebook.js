import React from "react";
import classes from "../Media.module.css";
import fb from "./Facebook.module.css";
import logo from "../../../assets/icon-facebook.svg";
import icon from "../../../assets/icon-up.svg";

const Facebook = (props) => {
  const headerClasses = (companyName) => {
    return companyName === "facebook"
      ? fb.fbHr
      : companyName === "twitter"
      ? "blue-hr"
      : companyName === "instagram"
      ? "ig-hr"
      : companyName === "youtube"
      ? "yt-hr"
      : " ";
  };
  return (
    <div className={classes.AllMedia}>
      <hr className={headerClasses(props.companyName)} />
      <div className={classes.UserName}>
        <img src={logo} alt="facebook-logo" />
        <span>@nathanf</span>
      </div>
      <h1>{props.facebook}</h1>
      <p>FOLLOWERS</p>
      <div className={classes.Ratings}>
        <div>
          <img src={icon} alt="up arrow" />
        </div>
        <div className={classes.GreenPercentage}>12 Today</div>
      </div>
    </div>
  );
};
export default Facebook;
