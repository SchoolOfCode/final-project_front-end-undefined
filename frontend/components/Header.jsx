import { Flex, Spacer, GridItem, Grid } from "@chakra-ui/react";
import Search from "./Search";
import Logo from "./Logo";
import MapStylesToggle from "./MapStylesToggle";

const Header = ({
  setCategory,
  setCoordinates,
  setRatings,
}) => {
  return (
    <Flex
      className="global-container"
      position="absolute"
      top={0}
      left={0}
      height={"70px"}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
      bgColor={"white"}
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
        <GridItem w="100%" h="10">
          <Logo />
        </GridItem>
        <GridItem w="100%" h="10">

          <Search
            setCoordinates={setCoordinates}
            setCategory={setCategory}
            setRatings={setRatings}
          />
        </GridItem>
      
        <GridItem w="50%" h="10">
          <Spacer />
        </GridItem>
      
      </Grid>
      <MapStylesToggle />
    </Flex>
  );
};

export default Header;

 