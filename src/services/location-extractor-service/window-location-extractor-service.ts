import { LocationParser } from "./location-parser";
import {
  LocationExtractorService,
  Params,
  DEFAULT_SUBMIT_LABEL,
  DEFAULT_TITLE,
} from "./common";

const TITLE_PARAM_NAME = "title";
const OPTIONS_PARAM_NAME = "option";
const SUBMIT_LABEL_PARAM_NAME = "submitLabel";

export class WindowLocationExtractorService extends LocationParser
  implements LocationExtractorService {
  getTitle() {
    return this.parseStringParam(TITLE_PARAM_NAME);
  }

  getSubmitLabel() {
    return this.parseStringParam(SUBMIT_LABEL_PARAM_NAME);
  }

  getOptions() {
    return this.parseArrayParam(OPTIONS_PARAM_NAME);
  }

  getShareLink({ title, submitLabel, options }: Params) {
    return [
      this.location.origin,
      this.location.pathname,
      "?",
      this.queryString({
        [TITLE_PARAM_NAME]: title || DEFAULT_TITLE,
        [SUBMIT_LABEL_PARAM_NAME]: submitLabel || DEFAULT_SUBMIT_LABEL,
        [OPTIONS_PARAM_NAME]: options || [],
      }),
    ].join("");
  }
}
