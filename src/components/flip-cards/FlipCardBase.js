const cardStyle = {
  padding: 25,
  border: "solid 1px",
  borderRadius: 5,
  color: "#fff",
  width: 300
};

const FlipCardBase = (props) => {
  return (
  <div className="text-white" style={{...cardStyle}}>
    {props.content}
  </div>);
}

export default FlipCardBase;