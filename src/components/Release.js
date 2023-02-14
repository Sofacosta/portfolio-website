import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { ButtonLink } from './ButtonLink';

const Release = (props) => {
  const { buyUrl, htmlDescription, id, originalImg, releaseDate, title } =
    props;
  return (
    <>
      <div id={id}>
        <h2 className="text-4xl mb-12">{title}</h2>
      </div>
      <div className="w-max my-18 mx-auto">
        <ButtonLink url={buyUrl}>Buy | Listen</ButtonLink>
      </div>
      <img
        className="my-12 object-cover h-auto w-full"
        src={originalImg}
        alt="VaultEP"
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
    </>
  );
};

export default Release;
