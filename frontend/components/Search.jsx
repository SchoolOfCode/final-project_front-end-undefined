import {
  Flex,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Autocomplete } from "@react-google-maps/api";
import React, { useState } from "react";
import { TriangleDownIcon, Search2Icon } from "@chakra-ui/icons";
import OurButton from "./OurButton";
import { Select } from "@chakra-ui/react";

const Search = ({
  setCoordinates,
  setCategory,
  setAccessibility,
  setRatings,
  setSearchStatus,
  searchStatus,
  onClick
}) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [categoryText, setCategoryText] = useState("What?");
  const [ratingText, setRatingText] = useState("Rating");
  const [accessibilityText, setAccessibilityText] = useState("Accessibility");

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

  function accessibilityChanges(accessibility) {
    console.log(accessibility);
    setAccessibility(accessibility);
    setAccessibilityText(accessibility);
  }

  function ratingChanges(rate) {
    console.log(rate);
    setRatings(rate);
    setRatingText(rate);
  }

  function searchFunction() {
    setSearchStatus(!searchStatus);
    console.log('yooo this is search status', searchStatus)
  }
  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <InputGroup
        width={"50vw"}
        minWidth="500px"
        height={"90%"}
        shadow="lg"
        border="2px"
        borderColor={`#FF9100`}
        rounded="full"
        padding="3px"
        display="flex"
        justify="center"
      >
        <Input
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
          // basis="0"
          // grow="1"
        />
        {/* <Divider orientation="vertical" />
        <Select
          placeholder={"What?"}
          color={`#2C2C68`}
          rounded="full"
          bgColor={"white"}
          fontWeight={"bold"}
          fontSize={17}
          width="32%"
          border={"none"}
        >
          <option value="option1" style={{ fontWeight: `normal` }}>
            All
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option2" style={{ fontWeight: `normal` }}>
            Restaurants
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option3" style={{ fontWeight: `normal` }}>
            Gym
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option4" style={{ fontWeight: `normal` }}>
            Cinema
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option5" style={{ fontWeight: `normal` }}>
            Shop
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option6" style={{ fontWeight: `normal` }}>
            Cafe
          </option>
        </Select>

        <Divider orientation="vertical" />
        <Select
          placeholder={"Accesibility Filter"}
          color={`#2C2C68`}
          rounded="full"
          bgColor={"white"}
          fontWeight={"bold"}
          fontSize={17}
          width="32%"
          border={"none"}
        >
          <option value="option1" style={{ fontWeight: `normal` }}>
            All
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option2" style={{ fontWeight: `normal` }}>
            Mobility imapirement
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option3" style={{ fontWeight: `normal` }}>
            Hearing impairment
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option4" style={{ fontWeight: `normal` }}>
            Vision impairment
          </option>
          <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
          <option value="option5" style={{ fontWeight: `normal` }}>
            Neurodivergent
          </option>
           <Divider
            orientation="horizontal"
            borderStyle="solid"
            borderColor={"#FF9100"}
          />
        </Select> */}

        {/* Venue category menu: */}
        <Menu>
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            rightIcon={<TriangleDownIcon color={`#FF9100`} />}
            fontWeight={"bold"}
            fontSize={17}
            width="32%"
            // basis="0"
            // grow="1"
          >
            {categoryText}
          </MenuButton>
          <MenuList
            rounded="lg"
            border="2px"
            borderColor={`#FF9100`}
            textColor={"#2C2C68"}
          >
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

        {/* Rating filter menu */}

        <Menu>
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            rightIcon={<TriangleDownIcon color={`#FF9100`} />}
            fontWeight={"bold"}
            fontSize={17}
            width="32%"
            // basis="0"
            // grow="1"
          >
            {ratingText}
          </MenuButton>
          <MenuList
            rounded="lg"
            border="2px"
            borderColor={`#FF9100`}
            textColor={"#2C2C68"}
          >
            <MenuItem onClick={() => ratingChanges("1")}>1 Star</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("2")}>2 Stars</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("3")}>3 Stars</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("4")}>4 Stars</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => ratingChanges("5")}>5 Stars</MenuItem>
          </MenuList>
        </Menu>
        {/* Accesibility filter menu: */}
        {/* <Menu>
          <MenuButton
            color={`#2C2C68`}
            as={Button}
            rounded="full"
            bg={"white"}
            rightIcon={<TriangleDownIcon color={`#FF9100`} />}
            fontWeight={"bold"}
            fontSize={17}
            width="32%"
            // basis="0"
            // grow="1"
          >
             {accessibilityText}

          </MenuButton>
          <MenuList
            rounded="lg"
            border="2px"
            borderColor={`#FF9100`}
            textColor={"#2C2C68"}
          >
            <MenuItem onClick={() => accessibilityChanges("Mobility")}>Mobility</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => accessibilityChanges("Visual")}>
              Visual
            </MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => accessibilityChanges("Hearing")}>Hearing</MenuItem>
            <Center height="10px">
              <Divider
                borderColor={`#FF9100`}
                orientation="horizontal"
                width="90%"
              />
            </Center>
            <MenuItem onClick={() => accessibilityChanges("Neurodivergent")}>Neurodivergent</MenuItem>
          </MenuList>
        </Menu>   */}

        <OurButton
          onClick={searchFunction}
          text={"Search"}
          icon={<Search2Icon />}
        />
        {/* <button onClick={searchFunction}>This is the NEWWWW button</button> */}
      </InputGroup>
    </Autocomplete>
  );
};

export default Search;
