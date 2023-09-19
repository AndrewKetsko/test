import { useState } from "react";
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

export const ChooseForm = ({ filter, setFilter }) => {
  
  const { data } = useGetCarsQuery();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const makes = [...new Set(data?.map((item) => item.make))].sort();
  const priceRange = [
    ...new Set(
      data?.map((item) => +item.rentalPrice.slice(1)).sort((a, b) => a - b)
    ),
  ];

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