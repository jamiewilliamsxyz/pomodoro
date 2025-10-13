"use client";

import { useQuote } from "@/hooks/useQuote";

const QuoteDisplay = () => {
  const { quote, loading, fetchQuote } = useQuote();

  return (
    <div
      onClick={() => !loading && fetchQuote()}
      className="max-w-10/12 h-32 text-center cursor-pointer flex items-start justify-center gap-2 transition-opacity duration-200"
      title={"Click to refresh quote"}
    >
      {loading && (
        <div className="w-6 h-6 mt-7 border-2 border-t-2 border-neutral-500 opacity-50 border-t-transparent rounded-full animate-spin" />
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
