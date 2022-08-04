import { Box, Image, Badge } from "@chakra-ui/react";
import Map from './Map':
import { Rating } from "@material-ui/lab";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function LargeCard(props) {
  const property = {
    // imageUrl: "https://bit.ly/2Z4KKcF",
    // imageAlt: "Rear view of modern home with pool",
    // title: "Cineworld",
    // category: "Cinema",
    // address: "55 Bluewater Road, Manchester, M25 6HB",
    // telephoneNumber: "02813849583",
    // website: "www.cineworld.com",
    // openingTime: "9:00 - 21:00",
    // rating: 4,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bgGradient="linear(to-r, #17CEDA, #032396)"
        rounded="full"
        _hover={"linear(to-r, blue.200, purple.500)"}
        leftIcon={<ReadMoreIcon />}
        color="white"
        width="5%"
        onClick={onOpen}
      >
        View more{" "}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height="500px" maxH="500px" maxW="250px">
          <Image rounded="lg" src={property.imageUrl} alt={property.imageAlt} />
          <ModalCloseButton
            size="sm"
            position="absolute"
            bg={`#FF9100`}
            colorScheme="white"
            color="white"
            borderColor="white"
            border-radius={`5%`}
            // z-index= '20'
            right="1"
            top="1"
          />

          <ModalBody
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            ml="2"
          >
            {property.title}
            <br></br>
            {property.category}
            <br></br>
            <Rating size="small" value={Number(property.rating)} readOnly />
            <br></br>
            {property.telephoneNumber}
            <br></br>
            {property.website}
            <br></br>
            {property.openingTime}
            <br></br>
            <br></br>
            <SignLanguageIcon fontSize="large" />
            <HearingIcon fontSize="large" />
            <RemoveRedEyeIcon fontSize="large" />
            <AccessibleIcon fontSize="large" />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LargeCard;
