import React, { useState, useContext } from "react";
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import LargeCard from "./LargeCard";
import {MapStyleContext} from './MapStyleContext'
//👇setCoordinates and setBounds only used with API
const Map = ({
  coordinates,
  /*setCoordinates, setBounds,*/ places,
  isCard,
  setIsCard,
  cardData,
  setCardData,
  rating,
  setRating,
  favStatus,
  setFavStatus,
}) => {
  const [mapStyle, SetMapStyle] = useContext(MapStyleContext)


  return (
    <Box className="map-box" width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={7.5}
        margin={[50, 50, 50, 50]}
        options={mapStyle}
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
          setFavStatus(false)
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
            <IoLocation color="#032396" fontSize={38} />
          </Box>
        ))}

        {/* Conditionally rendered the LargeCard component if isCard is true  */}
        {isCard && <LargeCard cardData={cardData} setIsCard={setIsCard} rating={rating} setRating={setRating}
        setFavStatus={setFavStatus} favStatus={favStatus}/>}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
