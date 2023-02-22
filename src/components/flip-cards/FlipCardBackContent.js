import { Link } from 'react-router-dom';

const FlipCardBackContent = ({
  altText,
  description,
  imageUrl,
  linkText,
  title,
  url,
}) => {
  return (
    <div className="bg-white text-black h-full p-4 overflow-scroll">
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}

      {url && linkText && (
        <span className="inline-block mb-2">
          <Link
            className="text-lg font-bold text-black hover:text-gray-500"
            to={url}
            target="_blank"
            rel="noreferrer"
          >
            {linkText}
          </Link>
        </span>
      )}

      {imageUrl && (
        <img
          className="object-cover w-full h-auto"
          src={imageUrl}
          alt={altText || ''}
        />
      )}

      {description && <p className="text-black text-sm">{description}</p>}
    </div>
  );
};

export default FlipCardBackContent;
