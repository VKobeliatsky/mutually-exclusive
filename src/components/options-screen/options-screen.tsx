import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import {
  useTitle,
  DEFAULT_TITLE,
  useSubmitLabel,
  DEFAULT_SUBMIT_LABEL,
} from "../../services/location";
import { AppScreen } from "../app-screen";
import { Options } from "../options";
import { CardActions, Button } from "@material-ui/core";

export const OptionsScreen: React.FC<{ onSubmit?(): void }> = ({
  onSubmit,
}) => {
  const title = useTitle() || DEFAULT_TITLE;
  const submitLabel = useSubmitLabel() || DEFAULT_SUBMIT_LABEL;

  return (
    <AppScreen>
      <Card>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Options />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            {submitLabel}
          </Button>
        </CardActions>
      </Card>
    </AppScreen>
  );
};
