import { useState } from "react";
import { useGetCarsQuery } from "../../redux/rentalApi";
import { Button } from "../button/Button";
import {
  Container,
  LabelText,
  InputText,
  CustomLabel,
} from "./ChooseForm.styled";
import {
  carMakesList,
  favoriteCars,
  // priceRangeCurrentOnly,
  priceRangePer10,
} from "filters/filters";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { Select } from "components/select/Select";

export const ChooseForm = ({ setFilter }) => {
  const { data } = useGetCarsQuery();
  const favorite = useSelector((state) => state.favorite.favorite);
  const { pathname } = useLocation();

  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const makes = carMakesList(
    pathname.includes("catalog") ? data : favoriteCars(data, favorite)
  );

  /**  IF ONLY VALID PRICE RANGE NEEDED */
  // const priceRange = !data ? [] : priceRangeCurrentOnly(data);

  const priceRange = !data
    ? []
    : priceRangePer10(
        pathname.includes("catalog") ? data : favoriteCars(data, favorite)
      );

  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = {
      brand: model,
      price,
      from,
      to,
    };
    setFilter(filter);
  };

  const handleReset = (e) => {
    setFilter({});
    setFrom("");
    setTo("");
    setModel("");
    setPrice("");
    e.currentTarget.parentNode.reset();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Select
        data={makes}
        setData={setModel}
        label={"Car brand"}
        labelText={"Choose a brand"}
        name={"cars"}
      />

      <Select
        data={priceRange}
        setData={setPrice}
        label={"Price per hour"}
        labelText={"max price"}
        name={"price"}
      />

      <CustomLabel>
        <LabelText>Car mileage / km</LabelText>
        <InputText
          name="from"
          type="number"
          min="0"
          max="999999"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <InputText
          name="to"
          type="number"
          min="0"
          max="999999"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </CustomLabel>

      <Button type={"submit"} text={"Search"} />
      <Button type={"button"} text={"Reset"} onClick={handleReset} />
    </Container>
  );
};
