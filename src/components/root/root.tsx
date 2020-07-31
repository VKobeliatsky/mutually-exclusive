import React from "react";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Services, ServicesContext } from "../../services";
import { Options } from "../options";
import { Title } from "../title";
import { PageTitle } from "../page-title";

import "./styles.css";

const useStyles = makeStyles({
  root: {
    marginTop: "12%"
  }
});

export const Root: React.FC<{ services: Services }> = ({ services }) => {
  const classes = useStyles();

  return (
    <ServicesContext.Provider value={{ services }}>
      <PageTitle />
      <Container className={classes.root} maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h2">
              <Title />
            </Typography>
            <Options />
          </CardContent>
        </Card>
      </Container>
    </ServicesContext.Provider>
  );
};
