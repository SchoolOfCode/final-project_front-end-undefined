import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import { useUser } from '@auth0/nextjs-auth0';

//👇 Comment out if using offline database. Uncomment if using API
// import { getPlacesData } from "./api/getPlacesData";

import Head from "next/head";

//👇 Comment out if using API. Uncomment if using offline database.
import { places } from "../libs/offlineData.js";

const Home = () => {

  const { user, error, isLoading } = useUser();

  console.log(user)
  //👇 Comment out if using offline database. Uncomment if using API
  // const [places, setPlaces] = useState({});

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  //👇 Comment out if using offline database. Uncomment if using API
  // const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState("");

  // this sets the initial state of the ratings.
 
  const [ratings, setRatings] = useState("");

  // This is not used, unless this is used in conjunction with API. It is not useful without that. 

  // const [isLoading, setIsLoading] = useState(false);

  //👇 Comment out if using API. Uncomment if using offline database. ❗What was here and where did it go?

  // get the users current location on intial login
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // This now selects places by rating OR category
  useEffect(() => {
    function conditionSelector(place) {
      return ratings && category
        ? place.rating > ratings && place.category == category
        : //☝️ if user selected both ratings and category, it filters for those places which meet both

        ratings
        ? place.rating > ratings
        : //☝️ else, if only reting is selected, it filters for all places with specified rating (or higher), regardless of category

        category
        ? place.category == category
        : //☝️ else, if only category is selected, it filters for places with specified category, regardless of rating

          ratings == 420;
      //☝️ else, if neither category nor rating is selected, it filters for places with rating of 420, which don't exist in our database
    }
    
    const filteredData = places.filter(conditionSelector);

    setFilteredPlaces(filteredData);

  }, [ratings, category]);

  // 👇 Updates the data to the users choice of category or location
  // 👇 Comment out if using offline database. Uncomment if using the API
  // useEffect(() => {
  //   setIsLoading(true);
  //   getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
  //     console.log(`This is data: ${data}`);
  //     console.dir(data);
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
        <script
          src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo"
          async
        ></script>
      </Head>

      <Header
        setRatings={setRatings}
        setCoordinates={setCoordinates}
        setCategory={setCategory}
      />

      <List places={filteredPlaces} isLoading={isLoading} />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        //👇 Comment out if using offline database. Uncomment if using API
        // setBounds={setBounds}
        places={filteredPlaces}
      />
    </Flex>
  );
};

export default Home;
