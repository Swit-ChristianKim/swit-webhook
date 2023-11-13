import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

export class WebHookClient {
  private readonly webHookBaseUrl = 'https://hook.swit.io';
  private axiosInstance: AxiosInstance;

  constructor(private webHookUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: this.webHookBaseUrl,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  async postChatMessageAndCreateTask(
    message: string,
  ): Promise<AxiosResponse<unknown, unknown>> {
    return this.axiosInstance.post(this.webHookUrl, { text: message });
  }
}
