import { Link } from 'react-router-dom';

export const ButtonLink = ({ children, url }) => {
  return (
    <Link
      className="no-underline text-2xl border-2 border-white rounded-lg p-2"
      target="_blank"
      to={{ pathname: url }}
    >
      {children}
    </Link>
  );
};
