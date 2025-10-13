export type QuoteState = string;
export type LoadingState = boolean;
export type ErrorState = string | null;
export type FetchQuoteReturn = Promise<void>;

export interface UseQuoteReturn {
  quote: QuoteState;
  loading: LoadingState;
  error: ErrorState;
  fetchQuote: () => FetchQuoteReturn;
}

export interface QuoteApiResponse {
  quote: QuoteState;
}
