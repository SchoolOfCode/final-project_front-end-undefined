import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HeaderSmall from "../components/HeaderSmall";
import HeaderBig from "../components/HeaderBig";
import List from "../components/List";
import Map from "../components/Map";
import Head from "next/head";

//👇 Comment out if using offline database. Uncomment if using API
// import { getPlacesData } from "./api/getPlacesData";

//👇 Comment out if using API. Uncomment if using offline database.
// import { places } from "../libs/offlineData.js";

const Home = () => {
  const [backendData, setBackendData] = useState([]);

  const [reviewData, setReviewData] = useState([]);

  const [starRating, setStarRating] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://undefined-room4.herokuapp.com/places`
        );
        const data = await response.json();
        // setPlaces(data.payload.rows);
        setBackendData(data.payload.rows);
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchReviewData = async () => {
      try {
        const response = await fetch(
          `https://undefined-room4.herokuapp.com/reviews`
        );
        const data = await response.json();
        // setPlaces(data.payload.rows);
        setReviewData(data.payload.rows);
        console.log('Review Data is...', data.payload.rows)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchReviewData();
    fetchData();
  }, []);

  

  console.log(backendData);

  //STATES:
  //Rating status passed down from here
  const [rating, setRating] = useState(null);
  
  //Changes from false to true when the user clicks a pin/marker. Then back to false when the user closes the large card pop-up:
  const [isCard, setIsCard] = useState(false);

  //Holds the details of the venue that has been selected. This is later passed to Large Card to be displayed:
  const [cardData, setCardData] = useState(null);

  // User-selected category and rating are put here for filtering purposes:
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState("");

  //Results of filtering go here:
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  //Used to display the skeleton whilst data are being fetched from API. Doesn't do anything when using offline data:
  const [isLoading, setIsLoading] = useState(false);

  // Gets the users current location on intial login
  const [coordinates, setCoordinates] = useState({});

  //This controls rendering of map, list and small logo + controls styling of Searchbar
  const [searchStatus, setSearchStatus] = useState(false);

  //Logs search button triggers. E.g. anytime the search button is clicked, the status will change, and that in turn will run the useEffect to fetch the map data
  //We will pass setSearchClick to Header > Search component.
  const [searchClick, setSearchClick] = useState(false);

  //👇 Comment out if using offline database. Uncomment if using API ------------------------------------------

  // const [bounds, setBounds] = useState(null);

  // const [places, setPlaces] = useState({});

  //❗There might have been another line of code here that got deleted ❗

  //☝️ Comment out if using offline database. Uncomment if using API ------------------------------------------

  useEffect(() => {
    //  navigator.geolocation.getCurrentPosition(
    //   ({ coords: { latitude, longitude } }) => {
    //     console.log({ latitude, longitude });
    setCoordinates({ lat: 51.60376294670231, lng: -0.010961442420194591 });
    //   }
    // );
  }, []);

  // This now selects places by rating OR category
  useEffect(() => {
    function conditionSelector(place) {
      return category == "all"
        ? place.rating > ratings
        : //☝️ if user selected category to be "all", this filters by rating alone (NB: rating is "" by default, which gets coerced into 0. So, if the user selected category "all", and didn't select rating, it'll display all items with rating > 0, i.e. all items)
        ratings && category
        ? place.rating > ratings && place.category == category
        : //☝️ else, if user selected both ratings and category, it filters for those places which meet both

        ratings
        ? place.rating > ratings
        : //☝️ else, if only reting is selected, it filters for all places with specified rating (or higher), regardless of category

        category
        ? place.category == category
        : //☝️ else, if only category is selected, it filters for places with specified category, regardless of rating

          ratings == 420;
      //☝️ else, if neither category nor rating is selected, it filters for places with rating of 420, which don't exist in our database
    }

    const filteredData = backendData.filter(conditionSelector);

    setFilteredPlaces(filteredData);
  }, [searchClick]);

  //❗ If using an API, move the commented-out useEffect (currently at the bottom of the file) here and uncomment it. ❗

  return (
    <Flex
      data-testid="home-test"
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
          src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo&region=GB"
          async
        ></script>
      </Head>
      {/* What follows is conditional rendering. 
      If searchStatus == true it renders our "map page"-it renders the small version of the Header + Map + Gallery
      If searchStatus == false it renders our "landing page"- the big version of the header (which covers
      whole screen) alone. 
       */}
      {searchStatus ? (
        <>
          {/* This is our map page */}
          <HeaderSmall
            setRatings={setRatings}
            setCoordinates={setCoordinates}
            setCategory={setCategory}
            setSearchStatus={setSearchStatus}
            searchStatus={searchStatus}
            setSearchClick={setSearchClick}
            searchClick={searchClick}
          />

<<<<<<< HEAD
          <List
            data-testid="home-test"
            places={filteredPlaces}
            isLoading={isLoading}
            setIsCard={setIsCard}
            setCardData={setCardData}
          />

          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            // setBounds={setBounds} //👈 Comment out if using offline database. Uncomment if using API
            places={filteredPlaces}
            isCard={isCard}
            setIsCard={setIsCard}
            cardData={cardData}
            setCardData={setCardData}
          />
        </>
      ) : (
        <>
          {/* This is our map page */}
          <HeaderBig
            setRatings={setRatings}
            setCoordinates={setCoordinates}
            setCategory={setCategory}
            setSearchStatus={setSearchStatus}
            searchStatus={searchStatus}
            setSearchClick={setSearchClick}
            searchClick={searchClick}
          />
        </>
=======
      <Header
        setRatings={setRatings}
        setCoordinates={setCoordinates}
        setCategory={setCategory}
        setSearchStatus={setSearchStatus}
        searchStatus={searchStatus}
        setSearchClick={setSearchClick}
        searchClick={searchClick}
        reviewData={reviewData}
       

      />

      {searchStatus && (
        <List
          data-testid="home-test"
          places={filteredPlaces}
          isLoading={isLoading}
          setIsCard={setIsCard}
          setCardData={setCardData}
          rating={rating}
          setRating={setRating}
          reviewData={reviewData}
          setStarRating={setStarRating}
          starRating={starRating}
        />
      )}

      {searchStatus && (
        <Map
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          // setBounds={setBounds} //👈 Comment out if using offline database. Uncomment if using API
          places={filteredPlaces}
          isCard={isCard}
          setIsCard={setIsCard}
          cardData={cardData}
          setCardData={setCardData}
          rating={rating}
          setRating={setRating}
          setStarRating={setStarRating}
          starRating={starRating}
        />
>>>>>>> 6f5306676a261f52dd765157828f64715d8ac96f
      )}
    </Flex>
  );
};

export default Home;

// 👇 Comment out if using offline database. Uncomment AND PUT INSIDE THE HOME COMPONENT if using the API.
// Updates the data to the users choice of category or location

// useEffect(() => {
//   setIsLoading(true);
//   getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
//     console.log(`This is data: ${data}`);
//     console.dir(data);
//     setPlaces(data);
//     setIsLoading(false);
//   });
// }, [type, coordinates, bounds]);
