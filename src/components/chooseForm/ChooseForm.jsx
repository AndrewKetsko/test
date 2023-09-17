import { useState } from "react";
import { useGetCarsQuery } from "../../redux/rentalApi";
import { Button } from "../button/Button";
import {
  Container,
  LabelText,
  SelectText,
  OptionText,
  InputText,
} from "./ChooseForm.styled";

export const ChooseForm = ({ filter, setFilter }) => {
  const { data } = useGetCarsQuery();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const makes = [...new Set(data?.map((item) => item.make))];
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
      <label>
        <LabelText>Car brand</LabelText>
        <SelectText name="cars" onChange={(e) => setModel(e.target.value)}>
          <OptionText value={""}>Choose a brand</OptionText>
          {makes?.map((make) => (
            <OptionText key={make} value={make}>
              {make}
            </OptionText>
          ))}
        </SelectText>
      </label>

      <label>
        <LabelText>Price per hour</LabelText>
        <SelectText name="price" onChange={(e) => setPrice(e.target.value)}>
          <OptionText value={""}>max price</OptionText>
          {priceRange?.map((price) => (
            <OptionText key={price} value={price}>
              {price}
            </OptionText>
          ))}
        </SelectText>
      </label>

      <label>
        <LabelText>Car mileage / km</LabelText>
        <InputText
          name="from"
          type="number"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <InputText
          name="to"
          type="number"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </label>

      <Button type={"submit"} text={"Search"} />
      <Button type={"button"} text={"Reset"} onClick={handleReset} />
    </Container>
  );
};
