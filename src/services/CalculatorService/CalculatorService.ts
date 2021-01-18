import ApiService from "./_private/ApiService";

export default class CalculatorService {
  apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async calculateExpression(expr: string) {
    const { result, error } = await this.apiService.calculateExpression(expr);
    if (error) {
      throw error;
    }
    return result;
  }
}
