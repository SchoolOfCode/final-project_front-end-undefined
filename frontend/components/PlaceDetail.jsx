import React from "react";
import { Flex, Text, Image, Badge } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { IoLocation } from "react-icons/io5";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PlaceDetail = ({ place }) => {
  return (
    <Flex
      marginTop="15px"
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      alignItems={"left"}
      direction="row"
      maxWidth={"500px"}
    >
      <Flex direction="column">
        <Flex alignItems={"center"} width={"full"}>
          <Text
            textTransform={"capitalize"}
            width={"100%"}
            fontSize={"14px"}
            fontWeight={"bold"}
            color={"#2C2C68"}
          >
            {place.name}
          </Text>
          <Rating size="small" value={Number(place.rating)} readOnly />
        </Flex>

        {/* Ratings */}
        {/* <Flex alignItems={"center"} width={"full"}>
          <Rating size="small" value={Number(place.rating)} readOnly />
        </Flex> */}

        {place?.address && (
          <Flex alignItems={"center"} width={"full"} px={1} my={2}>
            <IoLocation fontSize={20} color="#2C2C68" />

            <Text fontSize={"12px"} fontWeight={500} color={"gray.700"} ml={1}>
              {place.address}
            </Text>
          </Flex>
        )}

        <Flex width="full">
          {place.acessibility?.accessible && (
            <Flex
              alignItems={"center"}
              width={"20%"}
              px={1}
              my={2}
              height={"10px"}
            >
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#032396"}
                ml={1}
              >
                <AccessibleIcon fontSize="large" />
              </Text>
            </Flex>
          )}
          {place.acessibility?.eye && (
            <Flex
              alignItems={"center"}
              width={"20%"}
              px={1}
              my={2}
              height={"10px"}
            >
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#032396"}
                ml={1}
              >
                <VisibilityIcon fontSize="large" />
              </Text>
            </Flex>
          )}
          {place.acessibility?.hearing && (
            <Flex
              alignItems={"center"}
              width={"20%"}
              px={1}
              my={2}
              height={"10px"}
            >
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#032396"}
                ml={1}
              >
                <HearingIcon fontSize="large" />
              </Text>
            </Flex>
          )}
          {place.acessibility?.brain && (
            <Flex
              alignItems={"center"}
              width={"20%"}
              px={1}
              my={2}
              height={"10px"}
            >
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#032396"}
                ml={1}
              >
                <PsychologyIcon fontSize="large" />
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Image
        marginTop={"10px"}
        objectFit={"cover"}
        height={"100px"}
        width={"100px"}
        rounded="lg"
        src={
          place.photo
            ? place.photo
            : "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg"
        }
      />
    </Flex>
  );
};

export default PlaceDetail;

{
  /* <Text
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              bgColor="blue"
            ></Text> */
}

{
  /* dietary_restrictions */
}
{
  /* We may use this as behaviour for rendering accesibility badges */
}
{
  // {place?.dietary_restrictions && (
  //           <Flex width={"full"} flexWrap={"wrap"}>
  //             {place.dietary_restrictions.map((n, i) => (
  //               <Badge
  //                 colorScheme={"teal"}
  //                 cursor={"pointer"}
  //                 key={i}
  //                 m={1}
  //                 fontSize={10}
  //               >
  //                 {n.name}
  //               </Badge>
  //             ))}
  //           </Flex>
  //         )}
}
