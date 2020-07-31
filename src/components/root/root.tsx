import React from "react";

import { Services, ServicesContext } from "../../services";
import { App } from "../app";

import "./styles.css";

export const Root: React.FC<{ services: Services }> = ({ services }) => (
  <ServicesContext.Provider value={{ services }}>
    <App />
  </ServicesContext.Provider>
);
