import { useServices } from "../hooks";

export interface Params {
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

export const DEFAULT_TITLE = "Mutually exclusive options";
export const DEFAULT_SUBMIT_LABEL = "Accept";

export const useTitle = () => useServices().locationExtractor.getTitle();
export const useOptions = () => useServices().locationExtractor.getOptions();
export const useSubmitLabel = () =>
  useServices().locationExtractor.getSubmitLabel();
