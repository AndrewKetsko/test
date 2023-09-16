import Heart from "../../svg_s/heart.svg";
import ActiveHeart from "../../svg_s/active.svg";
import { Button } from "../button/Button";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Container, Image, Icon, Header, SemiTransparent } from "./Card.styled";

export const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Container>
      <Icon alt="heart" src={ActiveHeart || Heart} />
      <Image src={item.img || item.photoLink}></Image>
      <Header>
        {item.make} <span style={{ color: "#3470FF" }}>{item.model}</span>,{" "}
        {item.year}
        <span style={{ display: "inline-block", marginLeft: "auto" }}>
          {item.rentalPrice}
        </span>
      </Header>
      <SemiTransparent>
        {item.address.split(", ").slice(1).join(" | ")} | {item.rentalCompany} |{" "}
        {item.type} | {item.id} | {item.functionalities[0]}
      </SemiTransparent>
      <Button type={"button"} text={"Learn more"} onClick={openModal} width />
      {isOpen && <Modal onClose={closeModal} item={item} />}
    </Container>
  );
};
