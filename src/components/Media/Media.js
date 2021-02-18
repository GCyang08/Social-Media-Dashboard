import React from "react";
import classes from "./Media.module.css";
import Facebook from "./Facebook/Facebook";
import Twitter from "./Twitter/Twitter";
import Instagram from "./Instagram/Instagram";
import Youtube from "./Youtube/Youtube";
import Container from "@material-ui/core/Container";

const Media = (props) => {
  return (
    <div className={classes.BackGround}>
      <Container>
        <div className={classes.Media}>
          <Facebook facebook={props.facebook} companyName={"facebook"} />
          <Twitter twitter={props.twitter} />
          <Instagram instagram={props.instagram} />
          <Youtube youtube={props.youtube} />
        </div>
      </Container>
    </div>
  );
};

export default Media;
