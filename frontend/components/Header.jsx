import { Flex, Spacer, Text, GridItem, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Search from "./Search";
import Logo from './Logo';


const Header = ({setCategory, setCoordinates, setAccessibility, setRatings, setSearchStatus, searchStatus}) => {
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
    <Grid templateColumns='repeat(3, 1fr)' gap={1}>
      {/* <Flex className="logo-name-container" bgColor={"red"}> */}
      <GridItem w='100%' h='10'>
       <Logo /> 
       </GridItem> 
        <GridItem w='100%' h='10'>
      {/* </Flex> */}
      <Search setCoordinates={setCoordinates} setCategory={setCategory} setAccessibility={setAccessibility} setRatings={setRatings} setSearchStatus={setSearchStatus}/>
      </GridItem>
      {/* <Spacer bgColor={"blue"} /> */}
      <GridItem w='50%' h='10'>
       <Spacer />
        </GridItem> 
      </Grid>
    </Flex>
  );
};

export default Header;
{
  /* <Flex>
Leaving Search here so that we know where it was in the original design in case we have to come back to it
        <Search /> */
}

{
  /* <Flex alignItems={"center"} justifyContent={"center"}> */
}
{
  /* <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            // cursor={"pointer"}
            // _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            bgColor={"red"}
          > */
}
{
  /* <Menu>
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
                Choose ratings
              </MenuButton>

              <MenuList>
                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={20} fontWeight={500} color={"gray.700"}>
                    All Rating
                  </Text>
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(2)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    2.0
                  </Text>

                  <Rating size="small" value={2} readOnly />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(3)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    3.0
                  </Text>

                  <Rating size="small" value={3} readOnly />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(4)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4.0
                  </Text>

                  <Rating size="small" value={4} readOnly />
                </MenuItem>

                <MenuItem
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent="space-around"
                  onClick={() => setRatings(5)}
                >
                  <Text fontSize={20} fontWeight={500} color={"orange.500"}>
                    4.5
                  </Text>

                  <Rating size="small" value={5} readOnly />
                </MenuItem>
              </MenuList>
            </Menu> */
}
{
  /* <BiChevronDown fontSize={25} /> */
}
{
  /* </Flex> */
}

{
  /* Restaurants */
}
{
  /* <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("restaurants")}
          >
            <BiRestaurant fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurants
            </Text>
          </Flex> */
}

{
  /* Hotels */
}
{
  /* <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("hotels")}
          >
            <BiHotel fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hotels
            </Text>
          </Flex> */
}

{
  /* Attractions */
}
{
  /* <Flex
            alignItems={"center"}
            justifyContent={"center"}
            px={4}
            py={2}
            bg={"white"}
            rounded={"full"}
            ml={4}
            shadow="lg"
            cursor={"pointer"}
            _hover={{ bg: "gray.100" }}
            transition={"ease-in-out"}
            transitionDuration={"0.3s"}
            onClick={() => setType("attractions")}
          >
            <BiMapAlt fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Attractions
            </Text>
          </Flex> */
}
{
  /* </Flex>
      </Flex> */
}
