import { ParsedQuery, parse, stringify } from "query-string";

export abstract class LocationParser {
  constructor(protected location: Location) {}

  protected parseQuery(): ParsedQuery {
    return parse(this.location.search);
  }

  protected parseParam(name: string): string | string[] | null | undefined {
    return this.parseQuery()[name];
  }

  protected parseStringParam(name: string): string | undefined {
    const param = this.parseParam(name);

    return typeof param === "string"
      ? param
      : param instanceof Array
      ? param[0]
      : undefined;
  }

  protected parseArrayParam(name: string): string[] {
    const param = this.parseParam(name);

    if (param instanceof Array) {
      return param;
    }

    if (typeof param === "string") {
      return [param];
    }

    return [];
  }

  protected queryString(params: { [key: string]: any }): string {
    return stringify(params);
  }
}
