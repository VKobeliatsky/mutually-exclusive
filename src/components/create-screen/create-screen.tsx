import React, { useState, useCallback, useRef, useMemo } from "react";

import { AppScreen } from "../app-screen";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Snackbar,
  CardActions,
  Button,
  Collapse,
} from "@material-ui/core";
import produce from "immer";
import { useServices } from "../../services";
import {
  DEFAULT_TITLE,
  DEFAULT_SUBMIT_LABEL,
} from "../../services/location-extractor-service/common";

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

  const hasEnoughOptions = options.length > 1;

  const shareLink = useMemo(
    () => locationExtractor.getShareLink({ title, submitLabel, options }),
    [locationExtractor, title, submitLabel, options]
  );

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

  const [isInfoShown, setInfoShown] = useState(false);
  const closeInfo = useCallback(() => setInfoShown(false), []);
  const showInfo = useCallback(() => setInfoShown(true), []);

  const copyLinkToClipboard = useCallback(() => {
    const { current } = shareLinkInputRef;
    if (current) {
      shareLinkInputRef.current?.select();
      shareLinkInputRef.current?.setSelectionRange(0, 9999);

      document.execCommand("copy");
      showInfo();
    }
  }, [showInfo]);

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
            <Collapse key={index} in appear>
              <TextField
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
            </Collapse>
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
          <Collapse in={!hasEnoughOptions} mountOnEnter unmountOnExit>
            <Typography variant="caption">
              At least two options make sense
            </Typography>
          </Collapse>
          <Collapse
            in={hasEnoughOptions}
            mountOnEnter={true}
            unmountOnExit={true}
          >
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
          </Collapse>
        </CardContent>
        <Collapse
          in={hasEnoughOptions}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <CardActions>
            <Button
              href={shareLink}
              target="_blank"
              startIcon={<Icon>launch</Icon>}
              variant="contained"
              color="primary"
              fullWidth
            >
              Open
            </Button>
          </CardActions>
        </Collapse>
      </Card>
      <Snackbar
        message="Link copied to clipboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isInfoShown}
        autoHideDuration={6000}
        onClose={closeInfo}
      />
    </AppScreen>
  );
};
