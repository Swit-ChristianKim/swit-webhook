import { Http } from "./http";

export class WebHookClient {
  private readonly http: Http;
  constructor(private webHookUrl: string, private path: string) {
    this.http = new Http({
      baseURL: webHookUrl,
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  async postChatMessage(message: string) {
    return this.http.post(this.path, { text: message });
  }
}
