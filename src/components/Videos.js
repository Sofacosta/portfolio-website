import Video from './Video';

import { videos } from '../data/videos';

const Videos = () => {
  return (
    <>
    <h2 className="text-white text-2xl">Video</h2>
    {videos && videos.map((video) => <Video title={video.title} url={video.url} description={video.description} />)}
  </>
  )
}
  
export default Videos;