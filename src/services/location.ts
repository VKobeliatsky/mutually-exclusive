import { parse } from "query-string";
import { useServices } from "./hooks";

export interface LocationExtractorService {
  getTitle(): string | undefined;
  getOptions(): string[];
  getSubmitLabel(): string | undefined;
}

export const DEFAULT_TITLE = "Quality Picker";

export const TITLE_PARAM_NAME = "title";
export const OPTIONS_PARAM_NAME = "options";
export const SUBMIT_LABEL_PARAM_NAME = "submitLabel";

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
