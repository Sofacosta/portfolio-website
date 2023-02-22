import Video from './Video';

import { videos } from '../data/videos';

const Videos = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-white text-4xl mb-12">Video</h2>
      {videos &&
        videos.map((video, index) => (
          <Video
            description={video.description}
            key={index}
            title={video.title}
            url={video.url}
          />
        ))}
    </div>
  );
};

export default Videos;
