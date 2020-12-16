import React from "react";
import classes from "../Media/Media.module.css";
// import title from "../Media/Media.module.css";
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
            <FacebookPageViews facebookPgViews={props.facebookPgViews} />
          </div>
          <div className={classes.AllMedia}>
            <FacebookLikes facebookLikes={props.facebookLikes} />
          </div>
          <div className={classes.AllMedia}>
            <InstagramLikes instagramLikes={props.instagramLikes} />
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
