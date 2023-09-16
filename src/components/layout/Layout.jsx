import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/catalog"}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>Favorites</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
