import React from "react";

import upArrow from "../../assets/icon-up.svg";
import downArrow from "../../assets/icon-down.svg";

import classes from "./Media.module.css";

function Media(props) {
  const headerClasses = (companyName) => {
    return companyName === "facebook"
      ? classes.fbHr
      : companyName === "instagram"
      ? classes.igHr
      : companyName === "twitter"
      ? classes.twitterHr
      : companyName === "youtube"
      ? classes.ybHr
      : " ";
  };
  return (
    <div className={classes.Media}>
      {props.media.socialMedia.map((media, i) => {
        return (
          <section key={i} className={classes.MediaBox}>
            <hr className={headerClasses(media.companyName)} />
            <div className={classes.MediaBoxLayout}>
              <div className={classes.MediaUserName}>
                <img src={media.logo} alt="media logos" />
                <span>{media.username}</span>
              </div>

              <h1>{media.totalFollowers}</h1>
              <p>{media.followers}</p>

              <img src={media.followersRate ? downArrow : upArrow} alt="logo" />
              {media.followersRate ? (
                <span className={classes.Red}>{media.rate} Today</span>
              ) : (
                <span className={classes.Green}>{media.rate} Today</span>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Media;
