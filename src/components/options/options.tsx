import React, { useState, useCallback } from "react";
import produce from "immer";

import FormGroup from "@material-ui/core/FormGroup";

import { useOptions } from "../../services/location";
import { Option } from "./option";

type OptionsState = Partial<Record<string, boolean>>;

export const Options: React.FC = () => {
  const options = useOptions();
  const [state, setState] = useState(() => optionsToState(options));

  const updateOption = useCallback(
    (name: string, value: boolean) => {
      const names = Object.keys(state);
      const targetIndex = names.indexOf(name);
      const otherNames =
        names.length > 1
          ? [...names.slice(0, targetIndex), ...names.slice(targetIndex + 1)]
          : [];

      const otherName =
        otherNames[Math.floor(Math.random() * otherNames.length)];

      setState(
        produce((state: OptionsState) => {
          if (name in state) state[name] = value;
          if (value && otherName in state) state[otherName] = false;
        })
      );
    },
    [state]
  );

  return (
    <FormGroup>
      {Object.keys(state).map((name) => (
        <Option
          key={name}
          name={name}
          value={!!state[name]}
          onChange={(value) => updateOption(name, value)}
        />
      ))}
    </FormGroup>
  );
};

const optionsToState = (options: string[]) =>
  options.reduce<OptionsState>((state, option) => {
    state[option] = false;
    return state;
  }, {});
