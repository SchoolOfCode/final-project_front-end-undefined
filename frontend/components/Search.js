import {
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Divider,
  Center,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";
import { TriangleDownIcon, Search2Icon } from "@chakra-ui/icons";
import OurButton from "./OurButton";
import { Rating } from "@material-ui/lab";
import logo from "../public/logo.png";
import Image from "next/image";

const Search = ({
  setCoordinates,
  setCategory,
  setRatings,
  setSearchStatus,
  searchStatus,
  setSearchClick,
  searchClick,
}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [categoryText, setCategoryText] = useState("What?");
  const [ratingText, setRatingText] = useState("Rating");

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  //This function, categoryChanges(restaurant) replaces the onChange

  function categoryChanges(cat) {
    console.log(cat);
    setCategory(cat);
    setCategoryText(cat);
  }

  function ratingChanges(rate) {
    console.log(rate);
    setRatings(rate);
    setRatingText(rate);
  }

  let marginTop = "300px";
  let imageDisplay = "display";
  if (searchStatus) {
    marginTop = "5px";
    imageDisplay = "none";
  }

  function searchFunction() {
    setSearchStatus(true);
    setSearchClick(!searchClick);
  }
  return (
    <>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <InputGroup
          width={"50vw"}
          minWidth="500px"
          height={"50px"} //these units need to be absolute otherwise Dividers won't show
          shadow="lg"
          border="2px"
          borderColor={`#FF9100`}
          rounded="full"
          padding="3px"
          display="flex"
          justify="center"
        >
          <Input
            className="input-where"
            type={"text"}
            variant={"filled"}
            fontSize={17}
            fontWeight={"bold"}
            placeholder="Where?"
            bg={"white"}
            color={"gray.700"}
            _placeholder={{ color: `#2C2C68` }}
            rounded="full"
            width="32%"
          />
          <Divider orientation="vertical" />
          {/* Venue category menu: */}

          <Menu>
            <MenuButton
              className="category"
              color={`#2C2C68`}
              as={Button}
              rounded="full"
              bg={"white"}
              rightIcon={<TriangleDownIcon color={`#FF9100`} />}
              fontWeight={"bold"}
              fontSize={17}
              width="32%"
            >
              {categoryText}
            </MenuButton>
            <MenuList
              rounded="lg"
              border="2px"
              borderColor={`#FF9100`}
              textColor={"#2C2C68"}
            >
              <MenuItem onClick={() => categoryChanges("all")}>All</MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => categoryChanges("restaurant")}>
                Restaurant
              </MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => categoryChanges("gym")}>Gym</MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => categoryChanges("cinema")}>
                Cinema
              </MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => categoryChanges("shop")}>Shop</MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => categoryChanges("cafe")}>Cafe</MenuItem>
            </MenuList>
          </Menu>
          <Divider orientation="vertical" />

          <Menu>
            <MenuButton
              className="rating"
              color={`#2C2C68`}
              as={Button}
              rounded="full"
              bg={"white"}
              rightIcon={<TriangleDownIcon color={`#FF9100`} />}
              fontWeight={"bold"}
              fontSize={17}
              width="32%"
            >
              {/* If ratingText's value is "Rating" (as it will be upon load- it's
            the default), this prints "Rating". Otherwise (if it's a number-string), it displays it in
            star rating format. */}
              {ratingText == "Rating" ? (
                ratingText
              ) : (
                <Rating value={Number(ratingText)} readOnly />
              )}
            </MenuButton>
            <MenuList
              rounded="lg"
              border="2px"
              borderColor={`#FF9100`}
              textColor={"#2C2C68"}
            >
              <MenuItem onClick={() => ratingChanges("1")}>
                <Rating size="medium" value={1} readOnly /> & Up
              </MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => ratingChanges("2")}>
                <Rating size="medium" value={2} readOnly /> & Up
              </MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => ratingChanges("3")}>
                <Rating size="medium" value={3} readOnly /> & Up
              </MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => ratingChanges("4")}>
                <Rating size="medium" value={4} readOnly /> & Up
              </MenuItem>
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <MenuItem onClick={() => ratingChanges("5")}>
                <Rating size="medium" value={5} readOnly /> & Up
              </MenuItem>
            </MenuList>
          </Menu>

          <OurButton
            className="search"
            text={"Search"}
            icon={<Search2Icon />}
            onClick={searchFunction}
          />
        </InputGroup>
      </Autocomplete>
    </>
  );
};

export default Search;
