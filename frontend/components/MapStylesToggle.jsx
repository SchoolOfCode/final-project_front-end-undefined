import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import Image from "next/image";
import defaultMap from "../public/default.png";
import grayScaleMap from "../public/grayscale.png";
import highContrastMap from "../public/high-contrast.png";
import React, { useState, useContext } from "react";
// importing map style props
import { MapStyleContext } from "./MapStyleContext";
import Link from 'next/link';

const MapStylesToggle = ({}) => {
   // importing mapStyle useState from our MapStyleContext which withold the styling information.
  const [mapStyle, SetMapStyle] = useContext(MapStyleContext);
   // SetMapStyle(`require('../libs/map-grayscale.json')`)
  return (
    <>
    <Link href ='/About'>
    <Button
    // bgGradient="linear(to-r, #19f7fa, #1c8cfb)"
    // _hover={{backgroundImage: "linear-gradient(to right, #fff500 , #ff9100)"}}
      bgGradient="linear(to-r, #fff500, #ff9100)"
      _hover={{backgroundImage: "linear-gradient(to right, #19f7fa , #1c8cfb)", color : "white"}}
      fontWeight={"bold"}
      color={`#2C2C68`}
      width="120px"
      rounded="full"
      >
        About
      </Button>
      </Link>
    <Menu>
    
      <MenuButton
        color={`#2C2C68`}
        as={Button}
        rounded="full"
        bg={"white"}
        fontWeight={"bold"}
        fontSize={17}
        width="240px"
        border="2px"
        borderColor={`#FF9100`}
        rightIcon={<TriangleDownIcon color={`#FF9100`} />}
      >
        Map Theme
      </MenuButton>
      <MenuList
        rounded="lg"
        border="2px"
        borderColor={`#FF9100`}
        textColor={"#2C2C68"}S
       
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
            alt="Fluffybuns the destroyer"
            mr="12px"
            width="50px"
            height="50px" 
            
            
          />
           
        <Text margin="10px">Default</Text>
        </MenuItem>
        <Divider
          orientation="horizontal"
          borderColor={`#FF9100`}
          weight="10px"
          width="100%"
          alignSelf="center"
        />
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
            src={grayScaleMap}
            alt="Simon the pensive"
            mr="12px"
            width="50px"
            height="50px"
          />
          <Text margin="10px">GrayScale</Text>
        </MenuItem>
        <Divider
          orientation="horizontal"
          borderColor={`#FF9100`}
          weight="10px"
          width="100%"
          alignSelf="center"
        />
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
            src={highContrastMap}
            alt="Simon the pensive"
            mr="12px"
            width="50px"
            height="50px"
          />
          <Text margin="10px" >High Contrast </Text>
        </MenuItem>
      </MenuList>
    </Menu>
    </>
  );
  
};

export default MapStylesToggle;
