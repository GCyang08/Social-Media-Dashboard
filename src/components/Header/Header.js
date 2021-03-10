import React from "react";
import "./Header.css";

import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

function Header(props) {
  const totalFollowersHandler = (state) => {
    const allSocialMediaFollowers = state.reduce((acc, media) => {
      return (acc = acc + media.totalFollowers);
    }, 0);
    return allSocialMediaFollowers.toLocaleString();
  };

  return (
    <header className="Header">
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: {totalFollowersHandler(props.media.media)}</p>
        <hr />
      </div>
      <div>
        <ThemeSwitcher theme={props.theme} toggleTheme={props.toggleTheme} />
      </div>
    </header>
  );
}

export default Header;
