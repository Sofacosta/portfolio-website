import ReactPlayer from 'react-player';

const DjSets = () => {
  return (
    <>
      <h2 className="text-white text-4xl mb-12">DJ</h2>
      <h4 className="text-white text-2xl mb-12">Radio | Podcast | DJ mixes</h4>
      <ReactPlayer
        className="mx-auto"
        height="700px"
        url="https://soundcloud.com/coast2c/sets/mixes"
        width="100%"
      />
    </>
  );
};
export default DjSets;
