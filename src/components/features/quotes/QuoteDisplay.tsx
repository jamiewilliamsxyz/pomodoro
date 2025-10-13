"use client";

import { useState, useEffect } from "react";

const QuoteDisplay = () => {
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch quote function
  const fetchQuote = async () => {
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

      const data = await res.json();

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
  };

  // Fetch quote on initial load
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      onClick={() => !loading && fetchQuote()}
      className="max-w-10/12 h-32 text-center cursor-pointer flex items-start justify-center gap-2 transition-opacity duration-200"
      title={"Click to refresh quote"}
    >
      {loading && (
        <div className="w-6 h-6 border-2 border-t-2 border-neutral-500 opacity-50 border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && quote && (
        <q className="text-neutral-700 text-xl hover:opacity-80 transition-opacity duration-200">
          {quote}
        </q>
      )}
    </div>
  );
};

export default QuoteDisplay;
