import React, { useState, useCallback } from "react";

import { AppScreen } from "../app-screen";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  FormGroup,
  Button,
} from "@material-ui/core";
import {
  DEFAULT_TITLE,
  SUBMIT_LABEL_PARAM_NAME,
  DEFAULT_SUBMIT_LABEL,
} from "../../services/location";
import produce from "immer";

type CreateState = {
  title: string;
  submitLabel: string;
  options: string[];
};

export const CreateScreen: React.FC = () => {
  const [newOption, setNewOption] = useState("");
  const [{ title, submitLabel, options }, setState] = useState<CreateState>({
    title: DEFAULT_TITLE,
    submitLabel: DEFAULT_SUBMIT_LABEL,
    options: [] as string[],
  });

  const updateTitle = useCallback(
    (value: string) =>
      setState(
        produce((state: CreateState) => {
          state.title = value;
        })
      ),
    []
  );

  const updateSubmitLabel = useCallback(
    (value: string) =>
      setState(
        produce((state: CreateState) => {
          state.submitLabel = value;
        })
      ),
    []
  );

  const addOption = useCallback((value: string) => {
    setState(
      produce((state: CreateState) => {
        state.options.push(value);
      })
    );
    setNewOption("");
  }, []);

  const updateOption = useCallback((value: string, index: number) => {
    setState(
      produce((state: CreateState) => {
        state.options[index] = value;
      })
    );
  }, []);

  return (
    <AppScreen>
      <Card>
        <CardContent>
          <Typography variant="h4">
            Create your own mutually exclusive list
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Title"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Submit Button Label"
            value={submitLabel}
            onChange={(e) => updateSubmitLabel(e.target.value)}
          />
          {options.map((option, index) => (
            <TextField
              key={index}
              fullWidth
              margin="normal"
              variant="outlined"
              label="Edit Option"
              value={option}
              onChange={(e) => updateOption(e.target.value, index)}
            />
          ))}
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            label="Add Option"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            onBlur={(e) => addOption(newOption)}
            onKeyUp={(e) => e.keyCode === 13 && addOption(newOption)}
          />
          <Button variant="contained" color="primary">
            Done
          </Button>
        </CardContent>
      </Card>
    </AppScreen>
  );
};
