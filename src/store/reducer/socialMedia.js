import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import youtube from "../../assets/icon-youtube.svg";

const initialState = {
  socialMedia: [
    {
      companyName: "facebook",
      logo: facebook,
      username: "@nathanf",
      totalFollowers: 1987,
      followers: "FOLLOWERS",
      followersRate: false,
      rate: 12,
    },
    {
      companyName: "instagram",
      logo: instagram,
      username: "@realnathanf",
      totalFollowers: 11734,
      followers: "FOLLOWERS",
      followersRate: false,
      rate: 1099,
    },
    {
      companyName: "twitter",
      logo: twitter,
      username: "@nathanf",
      totalFollowers: 1044,
      followers: "FOLLOWERS",
      followersRate: false,
      rate: 99,
    },
    {
      companyName: "youtube",
      logo: youtube,
      username: "Nathan F.",
      totalFollowers: 8239,
      followers: "SUBSCRIBERS",
      followersRate: true,
      rate: 144,
    },
  ],
  socialMediaOverview: [
    {
      logo: facebook,
      overview: "Page views",
      overviewMedia: "Likes",
      viewsPercentage: false,
      likesPercentage: true,
      pageViews: 87,
      pgViewsPercent: 3,
      likes: 52,
      likesPercent: 2,
    },
    {
      logo: twitter,
      overview: "Retweets",
      overviewMedia: "Likes",
      viewsPercentage: false,
      likesPercentage: false,
      pageViews: 117,
      pgViewsPercent: 303,
      likes: 507,
      likesPercent: 553,
    },
  ],
  socialMediaOverview2: [
    {
      logo: instagram,
      overview: "Likes",
      overviewMedia: "Profile Views",
      viewsPercentage: false,
      likesPercentage: false,
      pageViews: 5462,
      pgViewsPercent: 2257,
      likes: "52k",
      likesPercent: 1375,
    },
    {
      logo: youtube,
      overview: "Likes",
      overviewMedia: "Total Views",
      viewsPercentage: true,
      likesPercentage: true,
      pageViews: 107,
      pgViewsPercent: 19,
      likes: 1407,
      likesPercent: 12,
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
