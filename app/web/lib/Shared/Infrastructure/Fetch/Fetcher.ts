type HeadersType = {
  [index: string]: string;
};

type OptionsType = {
  baseUrl: string;
  headers: HeadersType;
  mode: RequestMode;
};

export class Fetcher {
  private static INSTANCE: Fetcher | null = null;

  public baseUrl: string;
  public headers: HeadersType;
  public mode: RequestMode;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(options: OptionsType) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    this.mode = options.mode;
  }

  public static CREATE_FETCHER(options: OptionsType): Fetcher {
    if (this.INSTANCE !== null) return this.INSTANCE;
    return new Fetcher(options);
  }

  public async post<T>(endpoint: string, data: object) {
    const url = this.baseUrl + endpoint;
    const method = "POST";
    const body = JSON.stringify(data);
    const headers = new Headers();

    console.log(this.headers);

    const headersKey = Object.keys(this.headers);

    headersKey.forEach((k) => {
      console.log(`Added header ${k.toLowerCase()} with value ${this.headers[k].toLowerCase()}`);
      headers.append(k.toLowerCase(), this.headers[k].toLowerCase());
    });

    const request = new Request(url, {
      method,
      mode: this.mode,
      headers,
      body,
    });

    console.log(request);

    return await fetch(request);
  }
}
