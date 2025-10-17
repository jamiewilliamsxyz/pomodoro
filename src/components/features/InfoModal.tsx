import CloseModalButton from "../ui/CloseModalButton";
import TextLink from "@/components/ui/TextLink";

const InfoModal = () => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="px-6"
    >
      <div className="p-3 sm:px-5 sm:py-4 flex flex-col gap-4.5 relative top-[12vh] bg-base-100 max-w-sm h-fit rounded-xl shadow-sm">
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
          <i className="text-base-300">
            This project uses the QuoteSlate API, a free and open-source quote
            API. Check it out {""}
            <TextLink
              url="https://github.com/Musheer360/QuoteSlate"
              text="here"
            />
          </i>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
