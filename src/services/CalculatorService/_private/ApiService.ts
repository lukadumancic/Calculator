import axios, { AxiosInstance } from "axios";
import { ExpressionResultDto } from "types/Calculator";

export default class ApiService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://api.mathjs.org/v4",
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
