import React from "react";

import { Services, ServicesContext } from "../../services";
import { OptionsScreen } from "../options-screen";

import "./styles.css";

export const Root: React.FC<{ services: Services }> = ({ services }) => (
  <ServicesContext.Provider value={{ services }}>
    <OptionsScreen />
  </ServicesContext.Provider>
);
