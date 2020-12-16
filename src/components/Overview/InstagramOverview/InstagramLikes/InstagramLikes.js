import React from "react";
import logo from "../../../../assets/icon-instagram.svg";
import upArrow from "../../../../assets/icon-up.svg";
import classes from "../../OverView.module.css";

const InstagramLikes = (props) => {
  return (
    <div>
      <div className={classes.PageViews}>
        <span>Likes</span>
        <img src={logo} alt="facebook-logo" />
      </div>
      <div className={classes.PageViews}>
        <h3>{props.instagramLikes}</h3>
        <div className={classes.Ratings}>
          <div>
            <img src={upArrow} alt="up-arrow" />
          </div>
          <div className={classes.GreenPercentage}>2257%</div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLikes;
