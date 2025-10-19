interface TextLinkProps {
  url: string;
  text: string;
  ariaLabel: string;
}

const TextLink = ({ url, text, ariaLabel }: TextLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      aria-label={ariaLabel}
      className="w-fit text-base-300 underline cursor-pointer hover:opacity-80 transition-opacity duration-200"
    >
      {text}
    </a>
  );
};

export default TextLink;
