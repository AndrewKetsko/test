import { useEffect, useState } from "react";
import { useGetCarsQuery } from "../../redux/rentalApi";
import { Button } from "../button/Button";
import {
  Container,
  LabelText,
  SelectText,
  OptionText,
  InputText,
  SelectImg,
  CustomLabel,
} from "./ChooseForm.styled";
import Arrow from "../../pics/arrow.svg";
import {
  carMakesList,
  favoriteCars,
  /**priceRangeCurrentOnly,*/ priceRangePer10,
} from "filters/filters";
import { useLocation } from "react-router";

export const ChooseForm = ({ setFilter }) => {
  const { data } = useGetCarsQuery();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  const { pathname } = useLocation();

  useEffect(
    () => setFavorite(JSON.parse(localStorage.getItem("favorite")) || []),
    [pathname]
  );

  const makes = carMakesList(
    pathname.includes("catalog") ? data : favoriteCars(data, favorite)
  );

  /**  IF ONLY VALID PRICE RANGE NEEDED
  const priceRange = !data ? [] : priceRangeCurrentOnly(data);
*/

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
      <label style={{ position: "relative" }}>
        <LabelText>Car brand</LabelText>
        <SelectImg alt={"arrow"} src={Arrow} />
        <SelectText name="cars" onChange={(e) => setModel(e.target.value)}>
          <OptionText value={""}>Choose a brand</OptionText>
          {makes?.map((make) => (
            <OptionText key={make} value={make}>
              {make}
            </OptionText>
          ))}
        </SelectText>
      </label>

      <label style={{ position: "relative" }}>
        <LabelText>Price per hour</LabelText>
        <SelectImg alt={"arrow"} src={Arrow} />
        <SelectText name="price" onChange={(e) => setPrice(e.target.value)}>
          <OptionText value={""}>max price</OptionText>
          {priceRange?.map((price) => (
            <OptionText key={price} value={price}>
              {price}
            </OptionText>
          ))}
        </SelectText>
      </label>

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
