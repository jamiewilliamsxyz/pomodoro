const SmallTimerButton = ({ icon }: { icon: React.JSX.Element }) => {
  return (
    <button className="rounded-full border-neutral-800 border-[1.5px] text-neutral-800 flex items-center justify-center h-10 w-10">
      {icon}
    </button>
  );
};

export default SmallTimerButton;
