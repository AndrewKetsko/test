import Heart from "../../svg_s/heart.svg";
import ActiveHeart from "../../svg_s/active.svg";
import { Button } from "../button/Button";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Container, Image, Icon, Header, SemiTransparent } from "./Card.styled";

export const Card = ({ item, favorite, handleFavorite }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = (e) => {
    // console.log(e.target.className.includes('overlay'));
    setIsOpen(false);
  };

  const {
    img,
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
  } = item;

  return (
    <Container>
      <Icon
        alt="heart"
        src={favorite?.includes(id) ? ActiveHeart : Heart}
        onClick={() => handleFavorite(id)}
      />
      <Image src={img || photoLink}></Image>

      <Header>
        {make}{" "}
        {(make + model + year).length < 25 && (
          <span style={{ color: "#3470FF" }}>{model}</span>
        )}
        , {year}
        <span style={{ display: "inline-block", marginLeft: "auto" }}>
          {rentalPrice}
        </span>
      </Header>

      <SemiTransparent>
        {address.split(", ").slice(1).join(" | ")} | {rentalCompany} | {type} |{" "}
        {functionalities[0]}
      </SemiTransparent>
      <Button type={"button"} text={"Learn more"} onClick={openModal} width />
      {isOpen && <Modal onClose={closeModal} item={item} />}
    </Container>
  );
};
