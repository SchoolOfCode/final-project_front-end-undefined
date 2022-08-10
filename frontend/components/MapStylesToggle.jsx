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
  } from '@chakra-ui/react'
  import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon } from '@chakra-ui/icons'
  import Image from "next/image";
  import worldmap from "../public/world-map.jpg";

const MapStylesToggle = ({}) => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Your Cats
    </MenuButton>
    <MenuList>
      <MenuItem minH='48px'>
        <Image
          boxSize='2rem'
          borderRadius='full'
          src= {worldmap}
          alt='Fluffybuns the destroyer'
          mr='12px'
          width= "100px"
          height= "100px"
        />
        <span>Fluffybuns the Destroyer</span>
      </MenuItem>
      <MenuItem minH='40px'>
        <Image
          boxSize='2rem'
          borderRadius='full'
          src= {worldmap}
          alt='Simon the pensive'
          mr='12px'
          width= "100px"
          height= "100px"
        />
        <span>Simon the pensive</span>
      </MenuItem>
    </MenuList>
  </Menu>
    
  );
};

export default MapStylesToggle;
