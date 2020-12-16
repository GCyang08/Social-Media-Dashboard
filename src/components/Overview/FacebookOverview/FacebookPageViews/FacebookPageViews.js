import React from "react";
import logo from "../../../../assets/icon-facebook.svg";
import upArrow from "../../../../assets/icon-up.svg";
import classes from "../../OverView.module.css";

const PageViews = (props) => {
  return (
    <div>
      <div className={classes.PageViews}>
        <span>Page Views</span>
        <img src={logo} alt="facebook-logo" />
      </div>
      <div className={classes.PageViews}>
        <h3>{props.facebookPgViews}</h3>
        <div className={classes.Ratings}>
          <div>
            <img src={upArrow} alt="up-arrow" />
          </div>
          <div className={classes.GreenPercentage}>3%</div>
        </div>
      </div>
    </div>
  );
};

export default PageViews;
// {/* <p>Page Views</p>
// <img src={logo} alt="facebook-logo" />
// <h3>{props.facebookPgViews}</h3>
// <img src={upArrow} alt="up-arrow" />
// <span>3%</span> */}

// <div className={classes.AllOverview}>
//   <div className={classes.PageViews}>
//     <div className={classes.pgViews}>
//       <p>Page Views</p>
//     </div>
//     <div className={classes.pgViews}>
//       <img src={logo} alt="facebook-logo" />
//     </div>
//   </div>
//   <div className={classes.PageViews}>
//     <div className={classes.pgViews}>
//       <h3>{props.facebookPgViews}</h3>
//     </div>
//     <div className={classes.pgViews}>
//       <img src={upArrow} alt="up-arrow" />
//       <span>3%</span>
//     </div>
//   </div>
// </div>
