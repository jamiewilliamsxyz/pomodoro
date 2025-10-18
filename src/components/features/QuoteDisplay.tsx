"use client";

import { useQuote } from "@/hooks/useQuote";
import { useSettings } from "@/context/settingsContext";
import Spinner from "@/components/ui/Spinner";

const QuoteDisplay = () => {
  const { quote, loading, error, fetchQuote } = useQuote();
  const { settings } = useSettings();

  // Hide quotes if quote display set to false by the user in settings
  if (!settings.behaviour.displayQuotes) return null;

  return (
    <div
      onClick={() => !loading && fetchQuote()}
      className="max-w-10/12 sm:max-w-lg h-28 sm:h-24 text-center cursor-pointer flex items-center justify-center gap-2 transition-opacity duration-200"
      title="Click to refresh quote"
    >
      {loading && <Spinner className="mt-6" />}

      {error && <p className="text-red-400 text-lg">{error}</p>}

      {!loading && !error && quote && (
        <q className="text-base-300 text-xl hover:opacity-80 transition-opacity duration-200">
          {quote}
        </q>
      )}
    </div>
  );
};

export default QuoteDisplay;
