import { StyledButton } from "./Button.styled";

export const Button = ({ text, type, onClick, width = false }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      width={width ? undefined : true}
    >
      {text}
    </StyledButton>
  );
};
