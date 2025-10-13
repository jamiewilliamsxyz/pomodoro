import CloseModalButton from "../ui/CloseModalButton";
import TextLink from "@/components/ui/TextLink";

const InfoModal = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="px-3 py-2 sm:px-5 sm:py-3 flex flex-col gap-4.5 relative top-[8vh] bg-neutral-50 max-w-sm h-fit rounded-xl shadow-sm"
    >
      <CloseModalButton />
      <div className="ml-1 flex flex-col gap-3.5">
        <TextLink
          url="https://github.com/jamiewilliamsxyz"
          text="My GitHub Profile"
        />
        <TextLink
          url="https://github.com/jamiewilliamsxyz/pomodoro"
          text="Project Source Code"
        />
        <i>
          This project uses the QuoteSlate API, a free and open-source quote
          API. Check it out {""}
          <TextLink
            url="https://github.com/Musheer360/QuoteSlate"
            text="here"
          />
        </i>
      </div>
    </div>
  );
};

export default InfoModal;
