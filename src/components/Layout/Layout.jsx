import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { NavigationList, NavigationLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <nav>
        <NavigationList>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </li>
        </NavigationList>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;