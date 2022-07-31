import * as locationData from './api/data.json'

import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api";
import Head from "next/head";


const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const placesDummy = [
  {name: 'Hard coded Place 1'},
  {name: 'Hard coded Place 2'},
  {name: 'Hard coded Place 3'},
  {name: 'Hard coded Place 4'},
  {name: 'Hard coded Place 5'},
  {name: 'Hard coded Place 6'}
]

const Home = () => {
  const [places, setPlaces] = useState([]); // Pass this to List component

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");

  //console.log(`locationData is...`, JSON.stringify(locationData.features[0].properties.NAME, null, 2))  

  //
  const [isLoading, setIsLoading] = useState(false); // Pass this to List component

  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   const filteredData = places.filter((place) => place.rating > ratings);
  //   setFilteredPlaces(filteredData);
  //   console.log({ ratings });
  // }, [ratings]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
  //     console.log(data);
  //     setPlaces(data);
  //     setIsLoading(false);
  //   });
  // }, [type, coordinates, bounds]);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo"></script>
      </Head>

      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

<List places={locationData.places} isLoading={isLoading} />
      {/* <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      /> */}

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : locationData.places}
      />
    </Flex>
  );
};

export default Home;
