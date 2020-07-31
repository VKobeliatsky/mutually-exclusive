import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "50px",
    height: "50px",
    right: "10px",
    bottom: "10px",
  },
});

export const ScreenAction: React.FC = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};
