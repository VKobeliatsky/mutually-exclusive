import * as React from "react";
import { render } from "react-dom";

import { Root } from "./components/root";
import { WindowLocationExtractorService } from "./services/location";

const rootElement = document.getElementById("root");
render(
  <Root
    services={{
      locationExtractor: new WindowLocationExtractorService(window)
    }}
  />,
  rootElement
);
