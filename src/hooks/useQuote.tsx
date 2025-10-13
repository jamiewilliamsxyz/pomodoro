import { useState, useEffect, useCallback } from "react";
import type {
  UseQuoteReturn,
  QuoteState,
  LoadingState,
  FetchQuoteReturn,
  QuoteApiResponse,
} from "@/types";

export const useQuote = (): UseQuoteReturn => {
  const [quote, setQuote] = useState<QuoteState>("");
  const [loading, setLoading] = useState<LoadingState>(false);

  // Fetch quote function
  const fetchQuote = useCallback(async (): FetchQuoteReturn => {
    setLoading(true);

    const tags = ["motivation", "inspiration"];
    const selectedTag = tags[Math.floor(Math.random() * tags.length)];

    try {
      const res = await fetch(
        `https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}&minLength=40&maxLength=120`
      );

      if (!res.ok) {
        if (res.status === 429) {
          console.error(`Quote API rate limit exceeded ${res.status}`);
          setQuote("Slow down, try again later");
        } else {
          console.error(`Quote API responded with status ${res.status}`);
          setQuote(
            "Unable to load a quote at this time, please try again later"
          );
        }
        return;
      }

      const data: QuoteApiResponse = await res.json();

      setQuote(data.quote);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error fetching quote:", err.message);
      } else {
        console.error("Unknown error occurred while fetching quote");
      }
      setQuote("An unexpected error occurred");
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
    fetchQuote,
  };
};
