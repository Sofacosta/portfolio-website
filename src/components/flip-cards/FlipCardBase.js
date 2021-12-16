const cardStyle = {
  universal: {
    borderRadius: 5,
    width: 325,
    height: 325,
  },
  front: {
    overflow: 'hidden',
  },
  back: {
    overflowY: 'scroll',
  }
  
  
};

function FlipCardBase(props) {
  const cardFaceStyles = props.isFront ? cardStyle.front : cardStyle.back;
  return (
    <div className="text-white mb-6" style={{ ...cardStyle.universal, ...cardFaceStyles }}>
      {props.content}
    </div>
  );
}

export default FlipCardBase;
