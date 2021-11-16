export const Button = (props) => {
  const { onClick, label } = props;
  return <button onClick={onClick}>{label}</button>;
};
