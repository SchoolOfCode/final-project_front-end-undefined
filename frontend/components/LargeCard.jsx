import React, { useState } from "react";
import { Box, Image, Spacer, Text, Flex } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";

//Icon imports:
import AccessibleIcon from "@mui/icons-material/Accessible";
import HearingIcon from "@mui/icons-material/Hearing";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LargeCard = ({ cardData }) => {
  return (
    <Box
      bg="white"
      height="550px"
      width="250px"
      position={"absolute"}
      top={"-25vh"}
      left={"-25vw"}
      bottom="50px"
      borderRadius="15"
    >
      {/* Chakra Image component to display place Image on small card */}
      <Image
        objectFit={"cover"}
        width={"full"}
        height={"120px"}
        rounded="lg"
        src={cardData.photo}
      />

      {/* Chakra Text component to display place name details on small card */}
      <Box padding="3">
        <Text
          textTransform={"capitalize"}
          width={"full"}
          fontSize={"22px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          {cardData.name}
        </Text>
        <Text
          textTransform={"capitalize"}
          fontSize={"18px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          {cardData.category}
        </Text>
        <Text
          textTransform={"capitalize"}
          width={"full"}
          fontSize={"12px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          <Rating size="small" value={Number(cardData.rating)} readOnly />
        </Text>
        <Spacer />
        <Text
          textTransform={"capitalize"}
          width={"full"}
          fontSize={"14px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          {cardData.address}
        </Text>
        <br></br>
        <Text
          textTransform={"capitalize"}
          width={"full"}
          fontSize={"14px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          {cardData.phone_number}
        </Text>
        <Spacer />
        <br></br>
        <Text
          width={"full"}
          fontSize={"14px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          {cardData.web_address}
        </Text>
        <br></br>
        <Text
          textTransform={"capitalize"}
          width={"full"}
          fontSize={"14px"}
          fontWeight={"500"}
          isTruncated
          color={"#2C2C68"}
        >
          {cardData.opening_times}
        </Text>
        <br></br>

        <Flex
          width="full"
          // bg="red"
          direction="column"
          gap="3"
          pt={"3"}
        >
          {cardData.acessibility?.accessible && (
            <Flex
              alignItems={"center"}
              width={"full"}
              px={1}
              height={"25%"}
              // bg="yellow"
            >
              <Text color={"#032396"}>
                <AccessibleIcon fontSize="large" />
              </Text>

              <Text fontSize={"small"} fontWeight={500} color={"#2C2C68"}>
                This place is wheelchair accesible
              </Text>
            </Flex>
          )}
          {cardData.acessibility?.eye && (
            <Flex
              alignItems={"center"}
              width={"full"}
              px={1}
              height={"25%"}
              // bg="yellow"
            >
              <Text color={"#032396"}>
                <VisibilityIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                This place has adjustments for visual impairments
              </Text>
            </Flex>
          )}
          {cardData.acessibility?.hearing && (
            <Flex
              alignItems={"center"}
              width={"full"}
              px={1}
              height={"25%"}
              // bg="yellow"
            >
              <Text color={"#032396"}>
                <HearingIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                This place has adjustments for hearing impairments
              </Text>
            </Flex>
          )}
          {cardData.acessibility?.brain && (
            <Flex
              alignItems={"center"}
              width={"full"}
              px={1}
              height={"25%"}
              // bg="yellow"
            >
              {" "}
              <Text color={"#032396"}>
                <PsychologyIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                This place has a quiet space
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default LargeCard;
