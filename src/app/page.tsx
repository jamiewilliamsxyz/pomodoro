import Timer from "@/components/features/timer/Timer";
import QuoteDisplay from "@/components/features/quotes/QuoteDisplay";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Timer />
      <QuoteDisplay />
    </div>
  );
};

export default Home;
