export type QuoteState = string;
export type LoadingState = boolean;
export type FetchQuoteReturn = Promise<void>;

export interface UseQuoteReturn {
  quote: QuoteState;
  loading: LoadingState;
  fetchQuote: () => FetchQuoteReturn;
}

export interface QuoteApiResponse {
  quote: QuoteState;
}
