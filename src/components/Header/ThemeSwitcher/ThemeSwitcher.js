import React from "react";
import classes from "./ThemeSwitcher.module.css";
// import Switch from "@material-ui/core/Switch";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles({
//   switch: {
//     backgroundColor: "yellow",
//   },
// });
const ThemeSwitcher = (props) => {
  // const classes = useStyles(props);
  return (
    <div className={classes.Switcher}>
      <div>
        <p>Dark Mode</p>
      </div>
      <div className={classes.toggleSwitch}>
        <input
          type="checkbox"
          className="toggleSwitchCheckbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
