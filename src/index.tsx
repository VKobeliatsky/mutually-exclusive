import * as React from "react";
import { render } from "react-dom";

import { Root } from "./components/root";
import { WindowLocationExtractorService } from "./services/location-extractor-service/window-location-extractor-service";
const rootElement = document.getElementById("root");
render(
  <Root
    services={{
      locationExtractor: new WindowLocationExtractorService(window.location),
    }}
  />,
  rootElement
);
