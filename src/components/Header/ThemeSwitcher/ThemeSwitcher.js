import React from "react";
import classes from "./ThemeSwitcher.module.css";

import { Switch, withStyles } from "@material-ui/core";

function ThemeSwitcher(props) {
  const [state, setState] = React.useState({
    checked: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const ToggleSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          background: toggleBackgroundColor,
          border: 0,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      background: thumbBackgroundColor,
      boxShadow: "none",
    },
    track: {
      border: 0,
      borderRadius: 16 / 2,
      opacity: 1,
      background: toggleBackgroundColor,
    },
    checked: {},
  }))(Switch);

  const toggleBackgroundColor =
    "linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))";

  const thumbBackgroundColor =
    props.theme === "light" ? "hsl(232, 19%, 15%)" : " hsl(225, 100%, 98%)";

  return (
    <div className={classes.Switcher}>
      {props.theme === "light" ? <p>Light Mode</p> : <p>Dark Mode</p>}
      <ToggleSwitch
        checked={state.checked}
        onChange={handleChange}
        name="checked"
        onClick={props.toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitcher;
