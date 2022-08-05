import React from "react";
import PlaceDetail from "./PlaceDetail";
import { Flex, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      <Flex
        direction={"column"}
        bg={"whiteAlpha.900"}
        width={"37vw"}
        height="100vh" //may need {} around the ""
        position={"fixed"}
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden" //may need {} around the ""
        px={2}
        backgroundAttachment={"fixed"}
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
      direction={"column"}
      bg={"whiteAlpha.900"}
      width={"37vw"}
      maxWidth={"450px"} //If width of the gallery is causing problems, comment this line out
      height="100vh" //may need {} around the ""
      position={"fixed"}
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden" //may need {} around the ""
      px={2}
    >
      <Flex flex={1} overflowY={"scroll"} mt={16} direction={"column"}>
        {places &&
          places.map((place, i) => <PlaceDetail place={place} key={i} />)}
      </Flex>
    </Flex>
  );
};

export default List;
