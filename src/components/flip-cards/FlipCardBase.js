const cardStyle = {
  borderRadius: 5,
  width: 300,
  height: 300,
  overflowY: 'scroll',
};

function FlipCardBase(props) {
  return (
    <div className="text-white mx-4 my-4" style={{ ...cardStyle }}>
      {props.content}
    </div>
  );
}

export default FlipCardBase;
