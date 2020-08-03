import { parse, stringify } from "query-string";
import { useServices } from "./hooks";

interface Params {
  title?: string;
  submitLabel?: string;
  options?: string[];
}

export interface LocationExtractorService {
  getTitle(): string | undefined;
  getOptions(): string[];
  getSubmitLabel(): string | undefined;
  getShareLink(params: Params): string;
}

export const DEFAULT_TITLE = "Choose what you like";
export const DEFAULT_SUBMIT_LABEL = "Accept";

export const TITLE_PARAM_NAME = "title";
export const OPTIONS_PARAM_NAME = "option";
export const SUBMIT_LABEL_PARAM_NAME = "submitLabel";

const paramsToQueryString = ({
  title = DEFAULT_TITLE,
  submitLabel = DEFAULT_SUBMIT_LABEL,
  options = [],
}: Params) =>
  stringify({
    [TITLE_PARAM_NAME]: title,
    [SUBMIT_LABEL_PARAM_NAME]: submitLabel,
    [OPTIONS_PARAM_NAME]: options,
  });

export class WindowLocationExtractorService
  implements LocationExtractorService {
  constructor(protected window: Window) {}

  getTitle() {
    return this.getStringParam(TITLE_PARAM_NAME);
  }

  getOptions() {
    return this.getArrayParam(OPTIONS_PARAM_NAME);
  }

  getSubmitLabel() {
    return this.getStringParam(SUBMIT_LABEL_PARAM_NAME);
  }

  getShareLink(params: Params) {
    return `${this.window.location.origin}${
      this.window.location.pathname
    }?${paramsToQueryString(params)}`;
  }

  protected get location() {
    return this.window.location;
  }

  protected getParam(name: string) {
    const { search } = this.location;
    return parse(search)[name];
  }

  protected getStringParam(name: string): string | undefined {
    const parsed = this.getParam(name);
    return typeof parsed === "string"
      ? parsed
      : parsed instanceof Array
      ? parsed[0]
      : undefined;
  }

  protected getArrayParam(name: string): string[] {
    const parsed = this.getParam(name);
    return parsed instanceof Array
      ? parsed
      : typeof parsed === "string"
      ? [parsed]
      : [];
  }
}

export const useTitle = () => useServices().locationExtractor.getTitle();
export const useOptions = () => useServices().locationExtractor.getOptions();
export const useSubmitLabel = () =>
  useServices().locationExtractor.getSubmitLabel();
