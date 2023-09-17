import { Suspense } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Container, Link, LinkBox, Navigation } from "./Layout.styled";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Navigation>
        <ul>
          <LinkBox>
            <Link to={"/"} className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </LinkBox>
          <LinkBox>
            <Link
              to={"/catalog"}
              className={pathname === "/catalog" ? "active" : ""}
            >
              Catalog
            </Link>
          </LinkBox>
          <LinkBox>
            <Link
              to={"/favorites"}
              className={pathname === "/favorites" ? "active" : ""}
            >
              Favorites
            </Link>
          </LinkBox>
        </ul>
      </Navigation>
      <main style={{ marginLeft: "130px" }}>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
