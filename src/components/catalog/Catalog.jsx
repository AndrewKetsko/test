import { useGetCarsQuery } from "../../redux/rentalApi";
import { Card } from "../card/Card";
import { Container } from "./Catalog.styled";

export const Catalog = () => {
  const { data } = useGetCarsQuery();

  return (
    <Container>
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
};
