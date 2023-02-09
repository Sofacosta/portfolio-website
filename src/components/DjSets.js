import ReactPlayer from 'react-player';

const DjSets = () => {
  return (
    <>
      <h2 className="text-white text-4xl mb-12">DJ Mixes</h2>
      {/* <h4 className="text-white text-2xl mb-12">Radio | Podcast | DJ mixes</h4> */}
      <ReactPlayer
        url="https://soundcloud.com/coast2c/sets/mixes"
        height="700px"
      />
    </>
  );
};
export default DjSets;
