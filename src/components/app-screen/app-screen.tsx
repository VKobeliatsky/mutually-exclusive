import React from "react";

import { Container, Fade, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PageTitle } from "../page-title";
import {
  useTitle,
  DEFAULT_TITLE,
} from "../../services/location-extractor-service/common";

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
    <Fade in appear>
      <Box>
        <PageTitle value={title} />
        <Container className={classes.root} maxWidth="sm">
          {children}
        </Container>
      </Box>
    </Fade>
  );
};
