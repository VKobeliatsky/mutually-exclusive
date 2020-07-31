import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "12%",
  },
});

export const AppScreen: React.FC<{
  children: NonNullable<React.ReactNode>;
}> = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      {children}
    </Container>
  );
};
