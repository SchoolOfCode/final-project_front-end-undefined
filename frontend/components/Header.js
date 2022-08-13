import { Flex, Spacer, Button } from "@chakra-ui/react";
import Search from "./Search";
import Logo from "../public/logo_new_resized.png";
import MapStylesToggle from "./MapStylesToggle";

import Image from "next/image";

//Conditional rendering using the ternary operator (Condition ? if true : if false).
//If SearchStatus is ture, the first render is triggered- it renders the skinny header at the top with all the menus etc.
//If SearchStatus is false, the second render is triggered- it renders a header that covers the whole screen with searchbar and logo roughly 1/3 from the top (there's one Spacer between them and the top of the screen and 2 spacers between them and the bottom of the screen)

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
  return searchStatus ? (
    <>
      <Flex
        className="global-container"
        position={"absolute"}
        top={0}
        left={0}
        height={"70px"}
        w="full"
        zIndex={101}
        bgColor={"white"}
        align="center"
      >
        <Image
          src={Logo}
          alt={"logo"}
          objectFit="contain"
          width="300px"
          height="100%"
          onClick={() => setSearchStatus(false)}
        />

        <Spacer />
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
        <Spacer />
        <MapStylesToggle />
      </Flex>
    </>
  ) : (
    <Flex
      className="global-container"
      position={"absolute"}
      top={0}
      left={0}
      height={"full"}
      w="full"
      zIndex={101}
      bgColor={"white"}
      align="center"
      direction="column"
    >
      <Spacer />

      <Image src={Logo} alt={"logo"} onClick={() => setSearchStatus(false)} />
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
      <Spacer />
      <Spacer />
    </Flex>
  );
};

export default Header;
