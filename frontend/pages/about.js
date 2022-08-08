import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api/getPlacesData";
import Head from "next/head";
import LargeCard from "../components/LargeCard";

//👇 Comment out if using API. Uncomment if using offline database.
import { places } from "../libs/offlineData.js";

const Home = () => {
  //👇 Comment out if using offline database. Uncomment if using API
  // const [places, setPlaces] = useState({});
  // const [filteredPlaces, setfilteredPlaces] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState("");
  const [accessibility, setAccessibility] = useState("");

  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // setPlaces(places)

  const [accessibilityFilter, setaccessibilityFilter] = useState({});

  //👇 Comment out if using API. Uncomment if using offline database.

  // get the users current location on intial login
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // updates the data to the users choice of rating
  useEffect(() => {
    const filteredData = places.filter(
      (place) => place.rating > ratings && place.category == category
    );
    setFilteredPlaces(filteredData);
    console.log(`currently selected ratings: ${ratings}`);
    console.log(`currently selected category: ${category}`);
    console.dir(filteredPlaces);
    console.log(`this is filteredPlaces.length: ${filteredPlaces.length}`);
  }, [ratings, category]);


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
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo" async></script>
      </Head>

      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
        setCategory={setCategory}
        setAccessibility={setAccessibility}
        setSearchStatus={setSearchStatus}
        searchStatus={searchStatus}
      />
    </Flex>
  );
};

export default Home;

