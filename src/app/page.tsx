import Timer from "@/components/features/timer/Timer";
import QuoteDisplay from "@/components/features/quotes/QuoteDisplay";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 h-screen mt-[-68px]">
      <Timer />
      <QuoteDisplay />
    </div>
  );
};

export default Home;
