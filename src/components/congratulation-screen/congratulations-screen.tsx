import React from "react";

import { Typography, Card, CardContent, Icon, Fab } from "@material-ui/core";

import { AppScreen } from "../app-screen";
import { ScreenAction } from "../screen-action";

const CONGRATULATIONS_MESSAGE = "Wise choice!";

export const CongratulationsScreen: React.FC<{ onCreateClick?(): void }> = ({
  onCreateClick,
}) => {
  return (
    <AppScreen>
      <Card>
        <CardContent>
          <Typography variant="h4">{CONGRATULATIONS_MESSAGE}</Typography>
        </CardContent>
      </Card>
      <ScreenAction>
        <Fab color="primary" onClick={onCreateClick}>
          <Icon>add</Icon>
        </Fab>
      </ScreenAction>
    </AppScreen>
  );
};
