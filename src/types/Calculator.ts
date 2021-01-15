export interface CalculatorStore {
  isEvaluating: boolean;
  expression: string;
  results: string[] | null;
  error: string[] | null;
}
