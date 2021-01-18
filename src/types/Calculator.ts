export interface CalculatorStore {
  isEvaluating: boolean;
  expression: string;
  result: string | null;
  error: string | null;
}

export interface ExpressionResultDto {
  result: string;
  error: any;
}
