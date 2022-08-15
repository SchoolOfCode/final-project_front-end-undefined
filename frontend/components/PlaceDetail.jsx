import React from "react";
import { Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { IoLocation } from "react-icons/io5";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarRating from "./StarRating";

const PlaceDetail = ({ place, setIsCard, setCardData, rating, setRating, reviewData }) => {


  
  return (
    <Flex
      marginTop="15px"
      bg={"whiteAlpha.900"}
      px={4}
      py={2}
      m={1} //comment out if want fewer cards to display at the same time
      alignItems={"left"}
      direction="row"
      maxWidth={"500px"}
      distribute="space-between"
      cursor="pointer"
      onClick={() => {
        setCardData(place);
        setIsCard(true);
        setRating(null)

      }}
    >
      <Flex direction="column" width="full">
        <Flex alignItems={"center"} width={"full"}>
          <Text
            textTransform={"capitalize"}
            width={"100%"}
            fontSize={"14px"}
            fontWeight={"bold"}
            color={"#2C2C68"}
          >
            {place.name} THIS IS TESTTT
          </Text>
          {/* <Rating size="small" value={Number(place.rating)} readOnly /> */}
        </Flex>

        {place?.address && (
          <Flex align={"start"} width={"full"} my={2}>
            <IoLocation fontSize={20} color="#2C2C68" />

            <Text fontSize={"12px"} fontWeight={500} color={"gray.700"} ml={1}>
              {place.address} THIS IS ADDRESSSSS
            </Text>
          </Flex>
        )}

        <Flex width="full">
          {place?.accessible && (
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
          {place?.eye && (
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
          {place?.hearing && (
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
          {place?.brain && (
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
      <Spacer />
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
        alt={place.alt}
      />
      
    </Flex>
  );
      }

export default PlaceDetail;
