import React, { useState } from "react";
import { Box, Image, Spacer, Text, Flex } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { BiX } from "react-icons/bi";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router'

//Icon imports:

import AccessibleIcon from "@mui/icons-material/Accessible";
import HearingIcon from "@mui/icons-material/Hearing";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarRating from "./StarRating";

const LargeCard = ({ cardData, setIsCard, rating, setRating, setFavStatus, favStatus }) => {
 
  const { user, error, isLoading } = useUser();

  let favData = {

  }

  function saveFavItem(){
    
    if (user) {
      favData = {
        place_id: cardData.place_id,
        name: cardData.name,
        web_address: cardData.web_address,
        user_id: user.sub
      }
      setFavStatus(!favStatus);
      saveFav(favData)

    }else {
      Router.push('/api/auth/login')
    }
  }




  async function saveFav(favData) {
    try {
      console.log("Card Data", cardData);
      console.log("Fav Data", favData);
      const res = await fetch(`http://localhost:5000/favs`, {
      method: "POST",
      body: JSON.stringify(favData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    console.log('Returned data is' , data);

    } catch (error) {
      console.log('ERROR fetching data...',  error)
    }
    
    
  }

  return (
    <Box
      bg="white"
      height="690px"
      width="250px"
      position="relative"
      top="-25vh"
      left="-15vw"
      bottom="50px"
      borderRadius="15"
      border="2px"
      borderColor={`#FF9100`}
    >
      {/* This is the close-card X button */}
      <Box
        cursor={"pointer"}
        position={"absolute"}
        top={2}
        right={2}
        width={"30px"}
        height={"30px"}
        bgGradient="linear(to-tr, #17CEDA, #0954a9, #032396)" //this gradient works better on this small element than the gradient in OurButton
        rounded={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          setIsCard(false);
          setRating(null);
          setFavStatus(false)
        }}
      >
        <BiX fontSize={28} color="white" />
      </Box>

      {/* Favorite icon button */}
      <Box
        cursor={"pointer"}
        position={"absolute"}
        top={2}
        right={10}
        width={"30px"}
        height={"30px"}
        rounded={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={() => {
          saveFavItem()
        }}
      >
        {favStatus && <FcLike fontSize={28} color="white" />}

        {!favStatus && <FcLikePlaceholder fontSize={28} color="white" />}
      </Box>
      {/* Chakra Image component to display place Image on cards */}

      <Image
        alt={cardData.alt}
        objectFit="cover"
        width="full"
        height="120px"
        borderRadius="13"
        borderBottomRadius="0"
        src={cardData.photo}
      />

      {/* Chakra Text component to display place name details on cards */}

      <Box padding="3">
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="22px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.name}
        </Text>
        <Text
          textTransform="capitalize"
          fontSize="18px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.category}
        </Text>
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="12px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          <Rating size="small" value={Number(cardData.rating)} readOnly />
        </Text>
        <Spacer />
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.address}
        </Text>
        <br></br>
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.phone_number}
        </Text>
        <Spacer />
        <br></br>
        <Text
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          <a href={`${cardData.web_address}`} target="_blank" rel="noreferrer">
            {cardData.web_address}
          </a>
        </Text>
        <br></br>
        <Text
          textTransform="capitalize"
          width="full"
          fontSize="14px"
          fontWeight="500"
          isTruncated
          color="#2C2C68"
        >
          {cardData.opening_times}
        </Text>
        <br></br>

        <Flex width="full" direction="column" gap="3" pt={3}>
          {cardData?.accessible && (
            <Flex alignItems="center" width="full" px={1} height="25%">
              <Text color="#032396">
                <AccessibleIcon fontSize="large" />
              </Text>

              <Text fontSize="small" fontWeight={500} color="#2C2C68">
                <p>This place is wheelchair accesible</p>
              </Text>
            </Flex>
          )}
          {cardData?.eye && (
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
                <p>place has adjustments for visual impairments</p>
              </Text>
            </Flex>
          )}
          {cardData?.hearing && (
            <Flex alignItems={"center"} width={"full"} px={1} height={"25%"}>
              <Text color={"#032396"}>
                <HearingIcon fontSize="large" />
              </Text>
              <Text
                fontSize={"small"}
                fontWeight={500}
                color={"#2C2C68"}
                ml={1}
              >
                <p>This place has adjustments for hearing impairments</p>
              </Text>
            </Flex>
          )}
          {cardData?.brain && (
            <Flex alignItems={"center"} width={"full"} px={1} height={"25%"}>
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
          <Flex>
            <Text fontSize={"small"} fontWeight={500} color={"#2C2C68"} ml={1}>
              How would you rate this place?
            </Text>
            <StarRating
              rating={rating}
              setRating={setRating}
              place_id={cardData.id}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default LargeCard;
