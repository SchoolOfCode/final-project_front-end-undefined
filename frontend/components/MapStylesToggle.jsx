import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import defaultMap from "../public/map-thumb-default.png";
import greyScaleMap from "../public/map-thumb-greyscale.png";
import contrastMap from "../public/map-thumb-contrast.png";
import colourBlindMap from "../public/map-thumb-colourblind.png";
import React, { useState, useContext } from "react";
// importing map style props
import { MapStyleContext } from "./MapStyleContext";
import Link from "next/link";

const MapStylesToggle = ({}) => {
  // importing mapStyle useState from our MapStyleContext which withold the styling information.
  const [mapStyle, SetMapStyle] = useContext(MapStyleContext);

  return (
    <Flex align={"center"} height={"50px"}>
      <Link href="/About">
        <Button
          color={`#2C2C68`}
          as={Button}
          rounded="full"
          bg={"white"}
          fontWeight={"bold"}
          fontSize={17}
          width="100px"
          _hover={{
            backgroundImage: "linear-gradient(to right, #fff500 , #ff9100)",
          }}
        >
          About
        </Button>
      </Link>
      <Divider orientation="vertical" height="80%" borderColor={`#FF9100`} />
      <Menu>
<<<<<<< HEAD
=======
        <Link href="/About">
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            fontWeight={"bold"}
            fontSize={17}
            width="160px"
            border="2px"
            borderColor={`#FF9100`}
            _hover={{
              backgroundImage: "linear-gradient(to right, #fff500 , #ff9100)",
            }}
          >
            About
          </MenuButton>
        </Link>
      <Divider
          borderColor= 'white'
          width='1%'
          orientation="vertical"
        /> 
        <Link href="/AddAPlace">
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            fontWeight={"bold"}
            fontSize={17}
            width="160px"
            border="2px"
            borderColor={`#FF9100`}
            _hover={{
              backgroundImage: "linear-gradient(to right, #fff500 , #ff9100)",
            }}
          >
            Add A Place
          </MenuButton>
        </Link>
>>>>>>> 6f5306676a261f52dd765157828f64715d8ac96f
        <MenuButton
          color={`#2C2C68`}
          as={Button}
          rounded="full"
          bg={"white"}
          fontWeight={"bold"}
          fontSize={17}
          width="160px"
          _hover={{
            backgroundImage: "linear-gradient(to right, #fff500 , #ff9100)",
          }}
          rightIcon={<TriangleDownIcon color={`#FF9100`} />}
        >
          Map Theme
        </MenuButton>
        <MenuList
          rounded="lg"
          border="2px"
          borderColor={`#FF9100`}
          textColor={"#2C2C68"}
          S
        >
          <MenuItem
            onClick={() =>
              SetMapStyle({
                styles: require("../libs/map-default.json"),
              })
            }
            minH="48px"
            minW={"100px"}
          >
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={defaultMap}
              alt="Thumbnail of Default Map"
              mr="12px"
              width="50px"
              height="50px"
            />

            <Text margin="10px">Default</Text>
          </MenuItem>
          <Center height="10px">
            <Divider
              orientation="horizontal"
              borderColor={`#FF9100`}
              weight="10px"
              width="90%"
            />
          </Center>
          <MenuItem
            onClick={() =>
              SetMapStyle({
                styles: require("../libs/map-grayscale.json"),
              })
            }
            minH="40px"
          >
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={greyScaleMap}
              alt="Thumbnail of Greyscale Map"
              mr="12px"
              width="50px"
              height="50px"
            />
            <Text margin="10px">Greyscale</Text>
          </MenuItem>
          <Center height="10px">
            <Divider
              orientation="horizontal"
              borderColor={`#FF9100`}
              weight="10px"
              width="90%"
            />
          </Center>
          <MenuItem
            onClick={() =>
              SetMapStyle({
                styles: require("../libs/map-high-contrast.json"),
              })
            }
            minH="40px"
          >
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={colourBlindMap}
              alt="Thumbnail of Colour Blind Friendly Map"
              mr="12px"
              width="50px"
              height="50px"
            />
            <Text margin="10px">Colour Blind Friendly</Text>
          </MenuItem>
          <Center height="10px">
            <Divider
              orientation="horizontal"
              borderColor={`#FF9100`}
              weight="10px"
              width="90%"
            />
          </Center>
          <MenuItem
            onClick={() =>
              SetMapStyle({
                styles: require("../libs/map-colorblind.json"),
              })
            }
            minH="40px"
          >
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={contrastMap}
              alt="Thumbnail of Ultra High Contrast Map"
              mr="12px"
              width="50px"
              height="50px"
            />
            <Text margin="10px">Ultra High Contrast </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MapStylesToggle;
