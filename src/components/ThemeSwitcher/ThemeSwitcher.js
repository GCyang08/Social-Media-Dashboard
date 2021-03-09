import React from "react";
import "./ThemeSwitcher.css";

import { Switch, withStyles } from "@material-ui/core";

function ThemeSwitcher(props) {
  const [state, setState] = React.useState({
    checked: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const isLight = props.theme === "light";

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 50,
      height: 25,
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
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 20,
      height: 20,
      boxShadow: "none",
      position: "relative",
      top: "0px",
      left: "10px",
    },
    track: {
      borderRadius: 16,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  return (
    <div className="Switcher">
      <p>Dark Mode</p>
      <AntSwitch
        checked={state.checked}
        onChange={handleChange}
        name="checked"
        onClick={props.toggleTheme}
      />
    </div>
  );
}

export default ThemeSwitcher;
