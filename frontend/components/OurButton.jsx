import { Button } from "@chakra-ui/react";

const OurButton = ({ text, icon, onClick }) => {
  return (
    <Button
      bgGradient="linear(to-r, #17CEDA, #032396)"
      rounded="full"
      leftIcon={icon}
      color="white"
      width="120px"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default OurButton;
