import assert from "assert";

import CalculatorService from "services/CalculatorService/CalculatorService";
import { ExpressionResultDto } from "types/Calculator";

describe("CalculatorService", () => {
  let calculatorService: CalculatorService;
  beforeEach(() => {
    calculatorService = new CalculatorService();
    calculatorService.apiService.calculateExpression = async (
      expr: string
    ): Promise<ExpressionResultDto> => {
      await Promise.resolve();
      let data: ExpressionResultDto;
      try {
        data = {
          result: eval(expr).toString(),
          error: null,
        };
        return data;
      } catch (e) {
        data = {
          result: null,
          error: "Error",
        };
        return data;
      }
    };
  });
  it("should return result", async () => {
    assert((await calculatorService.calculateExpression("1+2")) === "3");
  });

  it("should throw error", async () => {
    let error = null;
    try {
      await calculatorService.calculateExpression("1+2.1.2");
    } catch (e) {
      error = e;
    }
    assert(error !== null);
  });
});
