import React, {useState, useEffect} from 'react';
import { useUser } from '@auth0/nextjs-auth0';import logo from "../public/logo.png";
import Image from "next/image";
import {
    Box,
    Flex,
   
  } from "@chakra-ui/react";

export default function Profile() {
    const { user, error, isLoading } = useUser();
    const [favsData, setFavsData] = useState([]);
    const [favList, setFavList] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://undefined-room4.herokuapp.com/favs`
            );
            const data = await response.json();
            // setPlaces(data.payload.rows);
            console.log(data)
            setFavsData(data.payload.rows);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();}, []);
        console.log('favsData is...', favsData)
let favName = []
        favsData.map((fav, i)=>{
            if (fav?.user_id === user?.sub){
              favName.push('-' + fav.name + ' ' + 'URL: ' + fav.web_address)  // web_address: fav.web_address}
            }
        })


 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Box maringTop={"300px"}>
        <Flex justify="centre" marginLeft="150px" >
          <Image src={logo} />
        </Flex>
   { user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
        <p>{JSON.stringify(user)}</p>
        <p>Fav List:</p>
        <p>{favName}</p>
      </div>
    )}
    </Box>
  );
}