import React from "react";
import PlaceDetail from "./PlaceDetail";
import {
  Text,
  Flex,
  Box,
  SkeletonCircle,
  SkeletonText,
  Divider,
  Center,
} from "@chakra-ui/react";

// When the page loads, the skeleton frame shows, but only if we're using the API.

const List = ({ places, isLoading, setIsCard, setCardData, setRating, rating, reviewData, starRating, setStarRating, setFavStatus, favStatus }) => {

  if (isLoading)
    return (
      <Flex
        direction="column"
        bg="whiteAlpha.900"
        width="37vw"
        height="100vh"
        position="fixed"
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden"
        px={2}
        backgroundAttachment="fixed"
      >
        <Box padding="6" boxShadow="lg" bg="white" mt={16}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    );

  return (
    <Flex
      direction="column"
      bg="whiteAlpha.900"
      width={"37vw"}
      maxWidth="450px" //If width of the gallery is causing problems, comment this line out
      height="100vh"
      position="fixed"
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden"
      px={2}
    >
      <Flex className="places-list" flex={1} overflowY="scroll" mt={16} direction="column">
        {places.length ? (
          places &&
          places.map((place, i) => (
            <>
              <PlaceDetail 
                place={place}
                key={i}
                setIsCard={setIsCard}
                setCardData={setCardData}
                setRating={setRating}
                rating={rating}
                reviewData={reviewData}
                favStatus={favStatus}
                setFavStatus={setFavStatus}
              />
              <Divider
                orientation="horizontal"
                borderColor={`#FF9100`}
                weight="10px"
                width="95%"
                alignSelf="center"
              />
            </>
          ))
        ) : (
          <Text fontSize="38px" justify="center">
            No places match your search :(
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default List;
