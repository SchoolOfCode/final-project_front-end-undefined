import React, { useState } from "react";
import { Box, Image, Spacer, Text, Flex } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import GoogleMap from "google-map-react";
import { IoLocation } from "react-icons/io5";
import LargeCard from "./LargeCard";

const Map = ({ coordinates, setCoordinates, setBounds, places, place }) => {
  //This state updates when you click the Iolocation icon for a particular place, that place icon will update from not having a card to having a card i.e. from false to true
  const [isCard, setIsCard] = useState(false);

  //This state updates the card for the icon of a particular place from not having any details to having details i.e. from null to '*Whatever details are fetched*'
  const [cardData, setCardData] = useState(null);

  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        // icon={url: 'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png'}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{
          styles: require("../libs/map-style1.json"),
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        //added click event by setting setCardData to places and passed the child as an array to places to get the index number (not getting an object) and set setisCard to true
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
        //This kills the big card when the user clicks away from it (i.e. anywhere on the map)
        onClick={() => {
          setIsCard(false);
        }}
      >
        {places?.map((place, i) => (
          <Box
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <IoLocation color="#2C2C68" fontSize={30} />
          </Box>
        ))}

        {/* Conditionally rendered the LargeCard component if isCard is true  */}
        {isCard && <LargeCard cardData={cardData} />}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
