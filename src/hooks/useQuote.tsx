// Will add route handler in the future

import { useState, useEffect, useCallback } from "react";
import type {
  UseQuoteReturn,
  QuoteState,
  LoadingState,
  ErrorState,
  FetchQuoteReturn,
  QuoteApiResponse,
} from "@/types";

export const useQuote = (): UseQuoteReturn => {
  const [quote, setQuote] = useState<QuoteState>("");
  const [loading, setLoading] = useState<LoadingState>(false);
  const [error, setError] = useState<ErrorState>(null);

  // Fetch quote function
  const fetchQuote = useCallback(async (): FetchQuoteReturn => {
    setLoading(true);
    setError(null);

    const tags = ["motivation", "inspiration"];
    const selectedTag = tags[Math.floor(Math.random() * tags.length)];

    try {
      const res = await fetch(
        `https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}&minLength=40&maxLength=120`
      );

      if (!res.ok) {
        if (res.status === 429) {
          setError("Slow down, try again later");
        } else {
          setError("Unable to load a quote at this time");
        }
        return;
      }

      const data: QuoteApiResponse = await res.json();

      setQuote(data.quote);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch quote on initial load
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return {
    quote,
    loading,
    error,
    fetchQuote,
  };
};
