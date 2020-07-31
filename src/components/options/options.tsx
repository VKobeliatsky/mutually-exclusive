import React, { useState, useCallback } from "react";

import FormGroup from "@material-ui/core/FormGroup";

import { useOptions } from "../../services/location";
import { Option } from "./option";

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

      if (name in state) {
        setState({
          ...state,
          [name]: value,
          [otherName]: value ? false : state[otherName]
        });
      }
    },
    [state]
  );

  return (
    <FormGroup>
      {Object.keys(state).map(name => (
        <Option
          key={name}
          name={name}
          value={!!state[name]}
          onChange={value => updateOption(name, value)}
        />
      ))}
    </FormGroup>
  );
};

const optionsToState = (options: string[]) =>
  options.reduce<Partial<Record<string, boolean>>>((state, option) => {
    state[option] = false;
    return state;
  }, {});
