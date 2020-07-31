import React from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { PageTitle } from "../page-title";
import { DEFAULT_TITLE, useTitle } from "../../services/location";

const useStyles = makeStyles({
  root: {
    marginTop: "12%",
  },
});

export const AppScreen: React.FC<{
  children: NonNullable<React.ReactNode>;
}> = ({ children }) => {
  const classes = useStyles();
  const title = useTitle() || DEFAULT_TITLE;

  return (
    <>
      <PageTitle value={title} />
      <Container className={classes.root} maxWidth="sm">
        {children}
      </Container>
    </>
  );
};
