import React, { Component } from "react";
import classes from "./Dashboard.module.css";
import Header from "../components/Header/Header";
import Media from "../components/Media/Media";
import Overview from "../components/Overview/OverView";

class Dashboard extends Component {
  state = {
    followers: {
      fbFollowers: 1987,
      twitterFollowers: 1044,
      instaFollowers: "11k",
      youtubeSubs: 8239,
    },
    totalFollowers: [1987, 1044, 11734, 8239],

    facebook: {
      pageViews: 87,
      likes: 52,
    },
    twitter: {
      retweets: 117,
      likes: 507,
    },
    instagram: {
      profileViews: "52k",
      likes: 5462,
    },
    youtube: {
      totalViews: 1407,
      likes: 107,
    },
  };

  totalFollowersHandler = () => {
    const followers = [...this.state.totalFollowers];
    console.log(followers);
    const all = followers.reduce((acc, followers, i) => {
      return acc + followers;
    }, 0);
    return all;
  };

  render() {
    return (
      <div className={classes.Dashboard}>
        <Header totalFollowers={this.totalFollowersHandler()} />
        <Media
          facebook={this.state.followers.fbFollowers}
          twitter={this.state.followers.twitterFollowers}
          instagram={this.state.followers.instaFollowers}
          youtube={this.state.followers.youtubeSubs}
        />
        <Overview
          facebookPgViews={this.state.facebook.pageViews}
          facebookLikes={this.state.facebook.likes}
          instagramLikes={this.state.instagram.likes}
          instagramViews={this.state.instagram.profileViews}
          twitterRetweets={this.state.twitter.retweets}
          twitterLikes={this.state.twitter.likes}
          youtubeLikes={this.state.youtube.likes}
          youtubeViews={this.state.youtube.totalViews}
        />
      </div>
    );
  }
}

export default Dashboard;
