import React from "react";

import {
  Typography,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";

import { AppScreen } from "../app-screen";

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
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onCreateClick}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </AppScreen>
  );
};
