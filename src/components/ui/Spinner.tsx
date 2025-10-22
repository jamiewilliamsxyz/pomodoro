interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className = "" }: SpinnerProps) => {
  return (
    <div
      className={`w-6 h-6 border-2 border-neutral-500 opacity-50 border-t-transparent rounded-full animate-spin
        ${className}
      }`}
    />
  );
};

export default Spinner;
