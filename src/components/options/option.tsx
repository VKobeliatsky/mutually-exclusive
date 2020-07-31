import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const Option: React.FC<{
  name: string;
  label?: string;
  value: boolean;
  onChange(value: boolean): void;
}> = ({ name, label = name, value, onChange }) => (
  <FormControlLabel
    control={
      <Switch
        checked={value}
        onChange={e => onChange(e.target.checked)}
        name={name}
      />
    }
    label={label}
  />
);
