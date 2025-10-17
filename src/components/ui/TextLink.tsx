interface TextLinkProps {
  url: string;
  text: string;
}

const TextLink = ({ url, text }: TextLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      className="w-fit text-base-300 underline cursor-pointer hover:opacity-80 transition-opacity duration-200"
    >
      {text}
    </a>
  );
};

export default TextLink;
