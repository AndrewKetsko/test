import { useLocation } from "react-router";
import { useGetCarsQuery } from "../../redux/rentalApi";
import { Card } from "../card/Card";
import { Container, Button, FlexDiv, StyledLink } from "./Catalog.styled";
import { useEffect, useState } from "react";
import { favoriteCars, filteredCars } from "filters/filters";

export const Catalog = ({ filter }) => {
  const { data } = useGetCarsQuery();
  const { pathname } = useLocation();
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  const filteredData = filteredCars(data, filter);

  const favoriteData = pathname.includes("catalog")
    ? filteredData
    : favoriteCars(filteredData, favorite);

  const pages = Math.ceil(favoriteData?.length / 8);
  const renderData = favoriteData?.slice(0, currentPage * 8);

  const handleFavorite = (id) => {
    if (favorite.includes(id)) {
      setFavorite([...favorite].toSpliced(favorite.indexOf(id), 1));
    } else {
      setFavorite([...favorite, id]);
    }
  };

  const handleMore = (e) => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {renderData?.length === 0 ? (
        <div>
          <FlexDiv>
            Your favorite list is empty.Select some favorite cars from
          </FlexDiv>
          <FlexDiv>
            <StyledLink to={"/catalog"}>CATALOG</StyledLink>
          </FlexDiv>
        </div>
      ) : (
        <Container>
          {renderData?.map((item) => (
            <Card
              key={item.id}
              item={item}
              favorite={favorite}
              handleFavorite={handleFavorite}
            />
          ))}
        </Container>
      )}

      {pages > currentPage && (
        <FlexDiv>
          <Button type="button" onClick={handleMore}>
            Load more
          </Button>
        </FlexDiv>
      )}
    </>
  );
};
