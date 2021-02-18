import React from "react";
// import logo from "../../../../assets/icon-facebook.svg";
// import upArrow from "../../../../assets/icon-up.svg";
import classes from "../../OverView.module.css";

const PageViews = (props) => {
  return (
    <div>
      <div className={classes.PageViews}>
        <span>{props.title}</span>
        <img src={props.logo} alt={props.altText} />
      </div>
      <div className={classes.PageViews}>
        <h3>{props.values}</h3>
        <div className={classes.Ratings}>
          <div>
            <img src={props.arrow} alt={props.altIconText} />
          </div>
          <div className={classes.GreenPercentage}>%{props.percentage}</div>
        </div>
      </div>
    </div>
  );
};

export default PageViews;
