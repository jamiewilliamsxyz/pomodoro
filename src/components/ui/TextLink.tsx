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
      className="w-fit text-neutral-700 underline cursor-pointer hover:text-neutral-500 transition-colors duration-200"
    >
      {text}
    </a>
  );
};

export default TextLink;
