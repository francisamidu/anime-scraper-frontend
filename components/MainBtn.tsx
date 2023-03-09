import { Button } from "@material-tailwind/react";
import React from "react";

type TButton = {
  text: string;
  onClick?: () => void;
};
const MainBtn = ({ onClick, text }: TButton) => {
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  return (
    <Button
      color="green"
      className="!w-max !bg-midnight-500 md:mt-0 mt-2"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default MainBtn;
