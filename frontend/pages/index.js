import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api";

// dummy data 
const places = [
  { name: "sample Place1" },
  { name: "sample Place1" },
  { name: "sample Place1" },
  { name: "sample Place1" },
];

const Home = () => {

  //The 3 states below are for our Header component
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");

  //This state is for talking to the API
  const [isLoading, setIsLoading] = useState(false);

  const [bounds, setBounds] = useState(null)

  // get the users current location on intial login 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
    console.log({latitude, longitude});
    setCoordinates({lat: latitude, lng: longitude})
    })

  }, [])

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
    })
  } ,[])

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
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

      <List places={places} isLoading={isLoading} />

      <Map 
      setCoordinates={setCoordinates}
      coordinates={coordinates} 
      setBounds={setBounds} />
    </Flex>
  );
};

export default Home;
