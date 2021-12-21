import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const Release = (props) => {
  const {
    buyUrl,
    htmlDescription,
    id,
    originalImg,
    releaseDate,
    title,
  } = props;
  return (
    <>
      <div id={id}>
        <h2 className="text-4xl mb-12">{title}</h2>
      </div>
      <div className="w-max my-18 mx-auto">
        <Link
          className="no-underline text-2xl border-2 border-white rounded-lg p-2"
          target="_blank"
          to={{ pathname: {buyUrl} }}
        >
          Buy | Listen
        </Link>
      </div>
      <img
        class="my-12"
        src={originalImg}
        alt="VaultEP"
      />
      <p>Released on: {releaseDate.toLocaleDateString(navigator.language, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</p>
      <div>
       {ReactHtmlParser(htmlDescription)}
      </div>
    </>
  );
};

export default Release;
