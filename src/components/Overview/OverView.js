import React from "react";
import classes from "../Media/Media.module.css";
import fbLogo from "../../assets/icon-facebook.svg";
import upArrow from "../../assets/icon-up.svg";
import downArrrow from "../../assets/icon-down.svg";
import FacebookPageViews from "./FacebookOverview/FacebookPageViews/FacebookPageViews";
import FacebookLikes from "./FacebookOverview/FacebookLikes/FacebookLikes";
import InstagramLikes from "./InstagramOverview/InstagramLikes/InstagramLikes";
import Container from "@material-ui/core/Container";
import InstagramViews from "./InstagramOverview/InstagramViews/InstagramViews";
import TwitterRetweets from "./TwitterOverview/TwitterRetweets/TwitterRetweets";
import TwitterLikes from "./TwitterOverview/TwitterLikes/TwitterLikes";
import YoutubeLikes from "./YoutubeOverview/YoutubeLikes/YoutubeLikes";
import YoutubeViews from "./YoutubeOverview/YoutubeViews/YoutubeViews";

const Overview = (props) => {
  return (
    <div>
      <Container>
        <h1 className={classes.Title2}>Overview- Today</h1>
        <div className={classes.Media}>
          <div className={classes.AllMedia}>
            <FacebookPageViews
              values={props.facebookPgViews}
              title={"Page Views"}
              logo={fbLogo}
              altText={"facebook-logo"}
              arrow={upArrow}
              altIconText={"up arrow"}
              percentage={"3"}
            />
          </div>
          <div className={classes.AllMedia}>
            <FacebookPageViews
              values={props.facebookLikes}
              title={"Likes"}
              logo={fbLogo}
              altText={"facebook-logo"}
              arrow={upArrow}
              altIconText={"up arrow"}
              percentage={"2"}
            />
          </div>
          <div className={classes.AllMedia}>
            <FacebookPageViews
              values={props.instagramLikes}
              title={"Likes"}
              logo={fbLogo}
              altText={"facebook-logo"}
              arrow={upArrow}
              altIconText={"up arrow"}
              percentage={"2"}
            />
          </div>
          <div className={classes.AllMedia}>
            <InstagramViews instagramViews={props.instagramViews} />
          </div>
        </div>
        <div className={classes.Media}>
          <div className={classes.AllMedia}>
            <TwitterRetweets twitterRetweets={props.twitterRetweets} />
          </div>
          <div className={classes.AllMedia}>
            <TwitterLikes twitterLikes={props.twitterLikes} />
          </div>
          <div className={classes.AllMedia}>
            <YoutubeLikes youtubeLikes={props.youtubeLikes} />
          </div>
          <div className={classes.AllMedia}>
            <YoutubeViews youtubeViews={props.youtubeViews} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Overview;
