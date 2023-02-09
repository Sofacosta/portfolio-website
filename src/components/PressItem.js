const PressItem = ({ title, source, url }) => {
  return (
    <div className="mb-16">
      <h3 className="text-white text-lg font-style italic justify-center">
        {title}
      </h3>
      <p className="text-blue-300 text-base justify-center mt-2 mb-4">
        {source}
      </p>
      <a
        className="bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold py-1.5 px-3 border border-gray-400 rounded shadow button-link"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Read More
      </a>
    </div>
  );
};

export default PressItem;
