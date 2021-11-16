import ReactPlayer from 'react-player';
import ReactHtmlParser from 'react-html-parser';

function Video(props) {
  const { title, url, description } = props;
  return (
    <>
      <hr className="mb-12" />
      <h3 className="text-white text-3xl mb-4">{title}</h3>
      <ReactPlayer url={url} />
      <p className="text-white mt-6 mb-12">{ReactHtmlParser(description)}</p>
    </>
  );
}

export default Video;
