import React from "react";
import logo from "../../../../assets/icon-youtube.svg";
import downArrow from "../../../../assets/icon-down.svg";
import classes from "../../OverView.module.css";

const YoutubeViews = (props) => {
  return (
    <div>
      <div className={classes.PageViews}>
        <span>Total Views</span>
        <img src={logo} alt="facebook-logo" />
      </div>
      <div className={classes.PageViews}>
        <h3>{props.youtubeViews}</h3>
        <div className={classes.Ratings}>
          <div>
            <img src={downArrow} alt="down-arrow" />
          </div>
          <div className={classes.RedPercentage}>12%</div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeViews;
