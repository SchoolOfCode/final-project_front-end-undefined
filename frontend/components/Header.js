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
  return (
    <>
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
        <Image
          src={Logo}
          alt={"logo"}
          width={"150px"}
          height={"50px"}
          style={{ zIndex: 99 }}
          onClick={() => setSearchStatus(false)}
        />
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
        <MapStylesToggle />
      </Flex>
    </>
  );
};

export default Header;
