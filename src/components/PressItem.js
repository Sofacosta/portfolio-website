import { ButtonLink } from './ButtonLink';

const PressItem = ({ title, source, url }) => {
  return (
    <div className="mb-16">
      <h3 className="text-white text-lg font-style italic justify-center">
        {title}
      </h3>
      <p className="text-blue-300 text-base justify-center mt-2 mb-4">
        {source}
      </p>
      <div className="text-xs">
        <ButtonLink url={url}>Read More</ButtonLink>
      </div>
    </div>
  );
};

export default PressItem;
