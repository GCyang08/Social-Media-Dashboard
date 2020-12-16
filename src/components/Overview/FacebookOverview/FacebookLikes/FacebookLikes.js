import React from "react";
import logo from "../../../../assets/icon-facebook.svg";
import downArrow from "../../../../assets/icon-down.svg";
import classes from "../../OverView.module.css";

const FacebookLikes = (props) => {
  return (
    <div>
      <div className={classes.PageViews}>
        <span>Likes</span>
        <img src={logo} alt="facebook-logo" />
      </div>
      <div className={classes.PageViews}>
        <h3>{props.facebookLikes}</h3>
        <div className={classes.Ratings}>
          <div>
            <img src={downArrow} alt="down-arrow" />
          </div>
          <div className={classes.RedPercentage}>2%</div>
        </div>
      </div>
    </div>
  );
};

export default FacebookLikes;
