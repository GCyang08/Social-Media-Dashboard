import React from "react";

import classes from "../../Overview/OverView.module.css";
import upArrow from "../../../assets/icon-up.svg";
import downArrow from "../../../assets/icon-down.svg";

function OverView2(props) {
  return (
    <div>
      {props.media.socialMediaOverview2.map((media, i) => {
        return (
          <div key={i} className={classes.SectionLayout}>
            <section className={classes.Section}>
              <div>
                <span>{media.overview}</span>
                <img src={media.logo} alt="social media icons" />
              </div>
              <div>
                <h2>{media.pageViews}</h2>
                <span>
                  <img
                    src={media.viewsPercentage ? downArrow : upArrow}
                    alt="logo"
                  />
                  {media.viewsPercentage ? (
                    <span className={classes.Red}>{media.pgViewsPercent}%</span>
                  ) : (
                    <span className={classes.Green}>
                      {media.pgViewsPercent}%
                    </span>
                  )}
                </span>
              </div>
            </section>
            <section className={classes.Section}>
              <div>
                <span>{media.overviewMedia}</span>
                <img src={media.logo} alt="social media icons" />
              </div>
              <div>
                <h2>{media.likes}</h2>
                <span>
                  <img
                    src={media.likesPercentage ? downArrow : upArrow}
                    alt="logo"
                  />
                  {media.likesPercentage ? (
                    <span className={classes.Red}>{media.likesPercent}%</span>
                  ) : (
                    <span className={classes.Green}>{media.likesPercent}%</span>
                  )}
                </span>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
export default OverView2;
