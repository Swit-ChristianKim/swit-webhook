"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookClient = void 0;
const axios_1 = __importDefault(require("axios"));
class WebHookClient {
    webHookUrl;
    webHookBaseUrl = 'https://hook.swit.io';
    axiosInstance;
    constructor(webHookUrl) {
        this.webHookUrl = webHookUrl;
        this.axiosInstance = axios_1.default.create({
            baseURL: this.webHookBaseUrl,
            headers: {
                'Content-type': 'application/json',
            },
        });
    }
    async postChatMessageAndCreateTask(message) {
        return this.axiosInstance.post(this.webHookUrl, { text: message });
    }
}
exports.WebHookClient = WebHookClient;
//# sourceMappingURL=web-hook-client.js.map