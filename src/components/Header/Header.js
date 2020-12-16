import React from "react";
import classes from "./Header.module.css";
import title from "../Media/Media.module.css";
import Container from "@material-ui/core/Container";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <Container>
        <div className={classes.Display}>
          <div className={classes.Title}>
            <h1 className={title.Title}>Social Media Dashboard</h1>
            <p>Total Followers: {props.totalFollowers}</p>
            <hr />
          </div>
          {/* <div className={classes.Switch}>
            <ThemeSwitcher />
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
