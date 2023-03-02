import { ButtonLink } from './ButtonLink';
import { useAnalytics } from 'use-analytics';

const PressItem = ({ title, source, url }) => {
  const { track } = useAnalytics();
  const readMoreHandler = () => {
    track('readMoreButton', {
      action: 'click',
      pressTitle: title,
    });
  };

  return (
    <div className="mb-16">
      <h3 className="text-white text-lg font-style italic justify-center">
        {title}
      </h3>
      <p className="text-blue-300 text-base justify-center mt-2 mb-4">
        {source}
      </p>
      <div className="text-xs">
        <ButtonLink onClick={readMoreHandler} url={url}>
          Read More
        </ButtonLink>
      </div>
    </div>
  );
};

export default PressItem;
