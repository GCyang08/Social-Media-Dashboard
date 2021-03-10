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
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
