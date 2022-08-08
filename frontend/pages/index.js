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

  //❗ To be deleted? 👇
  // const [accessibility, setAccessibility] = useState("");

  //❗type is the same as category but we sometimes use one sometimes the other- confusing :(
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // setPlaces(places)

  //❗ To be deleted? 👇
  // const [accessibilityFilter, setaccessibilityFilter] = useState({});

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
    console.log(`currently selected ratings: ${ratings}`);
    console.log(`currently selected category: ${category}`);
    console.dir(filteredPlaces);
    console.log(`this is filteredPlaces.length: ${filteredPlaces.length}`);
  }, [ratings, category]);

  // useEffect(() => {
  //   const userChoice = places.filter((place) => place.category === category);
  //   console.log(userChoice);
  // }, [category]);

  // useEffect(() => {
  //   const filteredPlaces = places.filter((place) => place.category === category);
  //   setfilteredPlaces(filteredPlaces)
  //   console.log(filteredPlaces)
  // }, [category]);

  // useEffect(() => {

  //   //re-render map
  // }, [places]);

  //   useEffect(() => {
  //     console.log(places.accessibility?.accessible)
  //     let filteredPlaces = [];
  //     let filteredAccessibility = [];
  //     let filteredRatings = []
  //     let finalFilter = []
  //     if (category !== '') {
  //        filteredPlaces =  places.filter((place) => place.category === category)
  //     }
  //     let accessibleObject = {}
  // if (accessibility !== '') {
  //   switch(accessibility) {
  //     case 'Mobility':
  //       accessibleObject = {accessible: true}
  //     break;
  //     case 'Hearing':
  //       accessibleObject =  {hearing: true}
  //       break;
  //     case 'Vision':
  //       accessibleObject =  {eye: true}
  //         break;
  //     case 'Neurodivergent':
  //       accessibleObject =  {brain: true}
  //       break;
  //     default:
  //       console.log('default select case...')
  //       // code block
  //   }

  //   filteredAccessibility = places.filter((place) => place.acessibility === accessibleObject);
  // }
  // if (ratings !== ''){
  //   filteredRatings = places.filter((place) => place.rating > ratings)
  // }

  // finalFilter = [...filteredPlaces, ...filteredAccessibility, ...filteredRatings]
  //     // const filteredPlaces = places.filter((place) => place.category === category);
  //     setfilteredPlaces(finalFilter)
  //     console.log(finalFilter)
  //   }, [category, accessibility, ratings]);

  // let placeFilter = {
  //   category: category,
  //   accessibility: accessibility,
  //   rating: ratings
  // };

  // updates the data to the users choice of category or location
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
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
        setCategory={setCategory}
        // setAccessibility={setAccessibility}
        setSearchStatus={setSearchStatus}
        searchStatus={searchStatus}
      />

      <List
        // places={filteredPlaces.length ? filteredPlaces : places}
        places={filteredPlaces}
        isLoading={isLoading}
      />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        // places={filteredPlaces.length ? filteredPlaces : places}
        places={filteredPlaces}
      />
    </Flex>
  );
};

export default Home;
