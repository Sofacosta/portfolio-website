import ReactPlayer from 'react-player'

function Video(props) {
  const { title, url, description } = props;
  return (
    <>
      <ReactPlayer url={url} />
      <h3 className="text-white text-2xl">{title}</h3>
      <p className="text-white">{description}</p>
    </>
  )
}

export default Video;