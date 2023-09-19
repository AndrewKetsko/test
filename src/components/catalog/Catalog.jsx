import { useLocation } from "react-router";
import { useGetCarsQuery } from "../../redux/rentalApi";
import { Card } from "../card/Card";
import { Container, Button } from "./Catalog.styled";
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

      {pages > currentPage && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="button" onClick={handleMore}>
            Load more
          </Button>
        </div>
      )}
    </>
  );
};
