import { Flex, Spacer } from "@chakra-ui/react";
import Search from "./Search";
import Logo from "../public/logo_new_resized.png";

import Image from "next/image";

//Conditional rendering using the ternary operator (Condition ? if true : if false).
//If SearchStatus is ture, the first render is triggered- it renders the skinny header at the top with all the menus etc.
//If SearchStatus is false, the second render is triggered- it renders a header that covers the whole screen with searchbar and logo roughly 1/3 from the top (there's one Spacer between them and the top of the screen and 2 spacers between them and the bottom of the screen)

const HeaderBig = ({
  setCategory,
  setCoordinates,
  setAccessibility,
  setRatings,
  setSearchStatus,
  setSearchClick,
  searchClick,
}) => {
  return (
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

      <Image
        src={Logo}
        alt={"AccesU Logo"}
        onClick={() => setSearchStatus(false)}
      />
      <Search
        setCoordinates={setCoordinates}
        setCategory={setCategory}
        setAccessibility={setAccessibility}
        setRatings={setRatings}
        setSearchStatus={setSearchStatus}
        setSearchClick={setSearchClick}
        searchClick={searchClick}
      />
      <Spacer />
      <Spacer />
    </Flex>
  );
};

export default HeaderBig;
