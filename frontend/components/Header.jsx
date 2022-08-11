import { Flex, Spacer, GridItem, Grid } from "@chakra-ui/react";
import Search from "./Search";
import Logo from "../public/logo.png";
import MapStylesToggle from "./MapStylesToggle";

import Image from "next/image";



const Header = ({
  setCategory,
  setCoordinates,
  setAccessibility,
  setRatings,
  setSearchStatus,
  searchStatus,
  setSearchClick,
  searchClick,
}) => {
  // console.log(searchStatus,"better be false")
  // let imageDisplay = "none";
  // if (searchStatus) {
  //   imageDisplay = "display";
  // }


  let imageDisplay;
  searchStatus ? (imageDisplay = "display") : (imageDisplay = "none");
  return (
    <Flex
      className="global-container"
      position={"absolute"}
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
        {/* <Flex className="logo-name-container" bgColor={"red"}> */}
        <GridItem w="100%" h="10">
          {/* This is the small logo next to the searchbar  */}
          <Flex display={imageDisplay} cursor="pointer">
            <Image
              src={Logo}
              alt={"logo"}
              width={"150px"}
              height={"50px"}
              style={{ zIndex: 99 }}
              onClick={() => setSearchStatus(false)}
            />
          </Flex>
        </GridItem>
        <GridItem w="100%" h="10">
          {/* </Flex> */}
          <Search
            setCoordinates={setCoordinates}
            setCategory={setCategory}
            setAccessibility={setAccessibility}
            setRatings={setRatings}
            setSearchStatus={setSearchStatus}
            searchStatus={searchStatus}
            setSearchClick={setSearchClick}
            searchClick={searchClick}
          />
        </GridItem >
        {/* <Spacer bgColor={"blue"} /> */}
        {/* <GridItem w="50%" h="10">
          <Spacer />
        </GridItem> */}
        {/* <GridItem>
        <Link href='/About'>
        <button>
            About
          </button>
        </Link>
     
      
        </GridItem> */} 
        </Grid >
        {searchStatus && (
      <MapStylesToggle />
      )} 
    </Flex>
  );
};

export default Header;
