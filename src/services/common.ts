import { createContext } from "react";
import { LocationExtractorService } from "./location-extractor-service";

export interface Services {
  locationExtractor: LocationExtractorService;
}

export const ServicesContext = createContext<{ services: Services }>({
  get services(): Services {
    throw Error("services are not provided");
  },
});
