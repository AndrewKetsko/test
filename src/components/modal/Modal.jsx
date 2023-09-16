import { useEffect } from "react";
import X from "../../svg_s/x.svg";
import { Button } from "../button/Button";
import { createPortal } from "react-dom";
import {
  Overlay,
  Container,
  CloseIcon,
  Image,
  Header,
  SemiTransparent,
  Text,
  SemiHeader,
  TextBG,
} from "./Modal.styled";

export const Modal = ({ onClose, item }) => {
  useEffect(() => {
    const keyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, [onClose]);

  const mil = item.mileage.toString().split("");
  mil.splice(-3, 0, ",");

  return createPortal(
    <Overlay onClick={onClose}>
      <Container>
        <CloseIcon alt="X" src={X} onClick={onClose} />
        <Image src={item.img || item.photoLink} />
        <Header>
          {item.make}
          <span style={{ color: "#3470FF" }}> {item.model}, </span>
          {item.year}
        </Header>
        <SemiTransparent>
          {item.address.split(", ").slice(1).join(" | ")} | id: {item.id} |
          Year: {item.year} | Type: {item.type}
        </SemiTransparent>
        <SemiTransparent>
          Fuel Consumption: {item.fuelConsumption} | Engine Size:{" "}
          {item.engineSize}
        </SemiTransparent>
        <Text>{item.description}</Text>
        <SemiHeader>Accessories and functionalities:</SemiHeader>
        <SemiTransparent>{item.accessories.join(" | ")}</SemiTransparent>
        <SemiTransparent>{item.functionalities.join(" | ")}</SemiTransparent>
        <SemiHeader>Rental Conditions: </SemiHeader>
        <div style={{ marginBottom: "24px" }}>
          <TextBG>
            Minimum age :{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>25</span>
          </TextBG>
          <TextBG>Valid driver’s license</TextBG>
          <TextBG>Security deposite required</TextBG>
          <TextBG>
            Mileage :{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>
              {mil.join("")}
            </span>
          </TextBG>
          <TextBG>
            Price :{" "}
            <span style={{ color: "#3470FF", fontWeight: 600 }}>
              {item.rentalPrice.slice(1)}$
            </span>
          </TextBG>
        </div>
        <Button type={"button"} text={"Rent a car"} />
      </Container>
    </Overlay>,
    document.querySelector("#modal")
  );
};
