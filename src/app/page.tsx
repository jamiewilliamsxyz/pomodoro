import Timer from "@/components/features/timer/Timer";
import QuoteDisplay from "@/components/features/QuoteDisplay";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 h-screen">
      <Timer />
      <QuoteDisplay />
    </div>
  );
};

export default Home;
