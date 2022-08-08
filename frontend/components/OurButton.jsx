import { Button } from "@chakra-ui/react";

const OurButton = ({ text, icon, onClick }) => {
  return (
    <Button
    onClick={onClick}
      bgGradient="linear(to-r, #17CEDA, #032396)"
      rounded="full"
      _hover={"linear(to-r, blue.200, purple.500)"}
      leftIcon={icon}
      color="white"
      width="120px"
    >
      {text}
    </Button>
  );
};

export default OurButton;
