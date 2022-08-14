import { Button } from "@chakra-ui/react";

const OurButton = ({ text, icon, onClick }) => {
  return (
    <Button
      bgGradient="linear(to-r, #17CEDA, #032396)"
      rounded="full"
      _hover={{
        backgroundImage: "linear-gradient(to right, #19f7fa , #1c8cfb)",
      }}
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
