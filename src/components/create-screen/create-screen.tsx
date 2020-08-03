import React, { useState, useCallback, useRef } from "react";

import { AppScreen } from "../app-screen";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@material-ui/core";
import { DEFAULT_TITLE, DEFAULT_SUBMIT_LABEL } from "../../services/location";
import produce from "immer";
import { useServices } from "../../services";

type CreateScreenState = {
  title: string;
  submitLabel: string;
  options: string[];
};

export const CreateScreen: React.FC = () => {
  const { locationExtractor } = useServices();
  const [newOption, setNewOption] = useState("");
  const [{ title, submitLabel, options }, setState] = useState<
    CreateScreenState
  >({
    title: locationExtractor.getTitle() || DEFAULT_TITLE,
    submitLabel: locationExtractor.getSubmitLabel() || DEFAULT_SUBMIT_LABEL,
    options: locationExtractor.getOptions(),
  });

  const shareLink = locationExtractor.getShareLink({
    title,
    submitLabel,
    options,
  });

  const shareLinkInputRef = useRef<HTMLInputElement>(null);

  const updateTitle = useCallback(
    (value: string) =>
      setState(
        produce((state: CreateScreenState) => {
          state.title = value;
        })
      ),
    []
  );

  const updateSubmitLabel = useCallback(
    (value: string) =>
      setState(
        produce((state: CreateScreenState) => {
          state.submitLabel = value;
        })
      ),
    []
  );

  const addOption = useCallback((value: string) => {
    if (value) {
      setState(
        produce((state: CreateScreenState) => {
          state.options.push(value);
        })
      );
      setNewOption("");
    }
  }, []);

  const removeOption = useCallback((index: number) => {
    setState(
      produce((state: CreateScreenState) => {
        state.options.splice(index, 1);
      })
    );
  }, []);

  const updateOption = useCallback((value: string, index: number) => {
    setState(
      produce((state: CreateScreenState) => {
        state.options[index] = value;
      })
    );
  }, []);

  const copyLinkToClipboard = useCallback(() => {
    shareLinkInputRef.current?.select();
    shareLinkInputRef.current?.setSelectionRange(0, 9999);

    document.execCommand("copy");
  }, []);

  return (
    <AppScreen>
      <Card>
        <CardContent>
          <Typography variant="h4">Create and Share</Typography>
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => removeOption(index)}>
                      <Icon>close</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
          <TextField
            fullWidth
            inputRef={shareLinkInputRef}
            margin="normal"
            variant="outlined"
            label="Share"
            value={shareLink}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={copyLinkToClipboard}>
                    <Icon>share</Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>
    </AppScreen>
  );
};
