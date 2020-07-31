import { Services, ServicesContext } from "./common";
import { useContext } from "react";

export const useServices = (): Services => useContext(ServicesContext).services;
