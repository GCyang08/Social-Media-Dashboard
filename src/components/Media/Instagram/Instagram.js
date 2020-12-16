import React from "react";
import classes from "../Media.module.css";
import ig from "./Instagram.module.css";
import logo from "../../../assets/icon-instagram.svg";
import icon from "../../../assets/icon-up.svg";

const Instagram = (props) => {
  return (
    <div className={classes.AllMedia}>
      <hr className={ig.Hr} />
      <div className={classes.UserName}>
        <div>
          <img src={logo} alt="instagram-logo" />
        </div>
        <div>
          <span>@realnathanf</span>
        </div>
      </div>
      <h1>{props.instagram}</h1>
      <p>FOLLOWERS</p>
      <div className={classes.Ratings}>
        <div>
          <img src={icon} alt="up-arrow" />
        </div>
        <div className={classes.GreenPercentage}>1099 Today</div>
      </div>
    </div>
  );
};
export default Instagram;
