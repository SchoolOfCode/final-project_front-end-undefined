import React from "react";
import { Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { Rating } from "@material-ui/lab";
import { IoLocation } from "react-icons/io5";
import HearingIcon from "@mui/icons-material/Hearing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PlaceDetail = ({ place, setIsCard, setCardData, rating, setRating, reviewData, favStatus, setFavStatus, averageRating, setAverageRating }) => {
  // get the place is from our places object that is passed to this component
  let selectedPlace = place.id
  // Create an empty array to store all the ratings for that specific place. This is later used to calculate average
  let myaverageRating = []
  reviewData.map((rating, i)=>{
    //filter out ONLY places that match the CURRENT place_id ,and find their star rating
    if (selectedPlace == rating.place_id) {
      console.log(i, ` rating is `, rating.rating, 'place id is', rating.place_id)
      //then push the star rating for that place into the array
      myaverageRating.push(rating.rating)
    }
  })
  //use reducer to loop through the N number of ratings and calculate the average
  const average = myaverageRating.reduce((a, b) => a + b, 0) / myaverageRating.length
  //the average constant will now replace the value for the Rating component in our render.
  console.log('Average Rating Array isss.....', average)

  setAverageRating(average)

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
        setFavStatus(false)
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
            {place.name}
          </Text>
          <Rating size="small" value={Number(average)} readOnly />
        </Flex>

        {place?.address && (
          <Flex align={"start"} width={"full"} my={2}>
            <IoLocation fontSize={20} color="#2C2C68" />

            <Text fontSize={"12px"} fontWeight={500} color={"gray.700"} ml={1}>
              {place.address}
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
};

export default PlaceDetail;
