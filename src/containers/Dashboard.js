import React, { useState } from "react";
import "./Dashboard.css";

import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
} from "../components/Header/ThemeSwitcher/ColorTheme/theme";
import { GlobalStyles } from "../components/Header/ThemeSwitcher/ColorTheme/global";

import Header from "../components/Header/Header";
import Media from "../components/Media/Media";
import OverViews from "../components/OverViews/OverViews";

function Dashboard(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header media={props} theme={theme} toggleTheme={toggleTheme} />
        <div className="Layout">
          <Media media={props} />
          <OverViews media={props} />
        </div>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    media: state.smr.socialMedia,
    mediaOverview: state.mo.socialMediaOverview,
  };
};

export default connect(mapStateToProps)(Dashboard);
