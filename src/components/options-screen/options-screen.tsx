import React from "react";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useTitle, DEFAULT_TITLE } from "../../services/location";
import { PageTitle } from "../page-title";
import { Options } from "../options";

const useStyles = makeStyles({
  root: {
    marginTop: "12%",
  },
});

export const OptionsScreen: React.FC = () => {
  const classes = useStyles();
  const title = useTitle() || DEFAULT_TITLE;

  return (
    <>
      <PageTitle value={title} />
      <Container className={classes.root} maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h2">{title}</Typography>
            <Options />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
