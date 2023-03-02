import ReactHtmlParser from 'react-html-parser';
import { ButtonLink } from './ButtonLink';
import { useAnalytics } from 'use-analytics';

const Release = (props) => {
  const { altText, buyUrl, htmlDescription, originalImg, releaseDate, title } =
    props;
  const { track } = useAnalytics();
  const buyListenClickHandler = () => {
    track('buyListenButton', {
      action: 'click',
      releaseTitle: title,
    });
  };

  return (
    <div>
      <h2 className="text-4xl mb-12">{title}</h2>
      <div className="w-max my-18 mx-auto">
        <ButtonLink onClick={buyListenClickHandler} url={buyUrl}>
          Buy | Listen
        </ButtonLink>
      </div>
      <img
        className="my-12 object-cover h-auto w-full"
        src={originalImg}
        alt={altText || ''}
      />
      <p>
        Released on:{' '}
        {releaseDate.toLocaleDateString(navigator.language, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <div>{ReactHtmlParser(htmlDescription)}</div>
    </div>
  );
};

export default Release;
