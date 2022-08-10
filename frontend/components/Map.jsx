import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import LargeCard from "./LargeCard";

//👇setCoordinates and setBounds only used with API
const Map = ({
  coordinates,
  /*setCoordinates, setBounds,*/ places,
  isCard,
  setIsCard,
  cardData,
  setCardData,
  }) => {
    const [mapStyle, SetMapStyle] = useState(`require('../libs/map-default.json')`)
    return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{
          styles: mapStyle,
        }}
        //👇 This sets bounds within which the API pins are displayed. This is useful only if we use API. No use for this if we use our own data.
        //👇 Comment out if using offline database. Uncomment if using API
        // onChange={(e) => {
        //   setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}

        //added click event by setting setCardData to places and passed the child as an array to places to get the index number (not getting an object) and set setisCard to true
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
        //This kills the big card when the user clicks away from it (i.e. when they click anywhere on the map)
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
