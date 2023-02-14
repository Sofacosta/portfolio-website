export const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button
      className="no-underline text-2xl border-2 border-white rounded-lg p-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
