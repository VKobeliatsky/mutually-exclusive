import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { useTitle, DEFAULT_TITLE } from "../../services/location";
import { PageTitle } from "../page-title";
import { AppScreen } from "../app-screen";
import { Options } from "../options";

export const OptionsScreen: React.FC = () => {
  const title = useTitle() || DEFAULT_TITLE;

  return (
    <>
      <PageTitle value={title} />
      <AppScreen>
        <Card>
          <CardContent>
            <Typography variant="h2">{title}</Typography>
            <Options />
          </CardContent>
        </Card>
      </AppScreen>
    </>
  );
};
