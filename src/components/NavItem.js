import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { path, name, children, isDesktop } = props;
  
  const getSubNavListItemClasses = (isLastItem) => {
    return isDesktop ? `py-0.5 relative -left-4${isLastItem ? ' pb-2' : ''}` : `py-0.5 relative -left-4${isLastItem ? '' : ' pb-4'}`;
  }

  return (
    <li className="pl-8 py-2 text-xl">
      {children ? (
        <>
          {isDesktop && <span className="text-white">{name}</span>}
          <ul className='child-navigation pt-0'>
            {children.map(
              (childNavItem, index) => {
                const { name, path } = childNavItem;
                const isLastItem = index === children.length - 1;
                return (
                  <li className={getSubNavListItemClasses(isLastItem)}  key={path}>
                    <Link className="px-4 no-underline" to={path}>{name}</Link>
                  </li>
                )
              }
            
            )}
          </ul>
        </>
      ) : (
        <Link className="no-underline" to={path}>{name}</Link>
      )}
    </li>
  );
};

export default NavItem;
