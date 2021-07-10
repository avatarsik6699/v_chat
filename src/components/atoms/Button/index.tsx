import React from "react";
import MButton from "@material-ui/core/Button";

interface IButtonProps {}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
      <MButton variant="contained">{children}</MButton>
  );
};
