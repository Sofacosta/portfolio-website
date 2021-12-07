import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { path, name, children } = props;
  return (
    <li className="pl-8 py-2 text-xl">
      {children ? (
        <>
          <span className="text-white">{name}</span>
          <ul className="child-navigation pt-0">
            {children.map(
              (childNavItem) => {
                const { name, path } = childNavItem;
                return (
                  <li className="py-0.5" key={path}>
                    <Link to={path}>{name}</Link>
                  </li>
                )
              }
            
            )}
          </ul>
        </>
      ) : (
        <Link to={path}>{name}</Link>
      )}
    </li>
  );
};

export default NavItem;
