import Video from './Video';

import { videos } from '../data/videos';

const Videos = () => {
  return (
    <div className="mx-auto max-w-3xl">
    <h2 className="text-white text-4xl mb-12">Video</h2>
    {videos && videos.map((video) => <Video title={video.title} url={video.url} description={video.description} />)}
  </div>
  )
}
  
export default Videos;