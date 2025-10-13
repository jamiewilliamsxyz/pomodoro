"use client";

import { useQuote } from "@/hooks/useQuote";
import Spinner from "@/components/ui/Spinner";

const QuoteDisplay = () => {
  const { quote, loading, error, fetchQuote } = useQuote();

  return (
    <div
      onClick={() => !loading && fetchQuote()}
      className="max-w-10/12 h-32 text-center cursor-pointer flex items-start justify-center gap-2 transition-opacity duration-200"
      title={"Click to refresh quote"}
    >
      {loading && <Spinner className="mt-7" />}

      {error && <p className="text-red-400 text-lg">{error}</p>}

      {!loading && !error && quote && (
        <q className="text-neutral-700 text-xl hover:opacity-80 transition-opacity duration-200">
          {quote}
        </q>
      )}
    </div>
  );
};

export default QuoteDisplay;
