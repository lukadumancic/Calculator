import axios, { AxiosInstance } from "axios";

import config from "config";
import { ExpressionResultDto } from "types/Calculator";

export default class ApiService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.mathApiUrl,
    });
  }

  async calculateExpression(expr: string): Promise<ExpressionResultDto> {
    try {
      const response = await this.axiosInstance.post("/", {
        expr,
      });
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
}
