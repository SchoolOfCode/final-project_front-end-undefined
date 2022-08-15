import React, {useState, useEffect} from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Profile() {
    const { user, error, isLoading } = useUser();
    const [favsData, setFavsData] = useState([]);
    const [favList, setFavList] = useState()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `http://localhost:5000/favs`
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
let favName = 'dd'
        favsData.map((fav, i)=>{
            if (fav.user_id === user.sub){
                
                favName = fav.name
console.log('this is the fav list.., ', favName)
            }

        })


 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
        <p>{JSON.stringify(user)}</p>
        <p>Fav List:</p>
        <p>{favName}</p>
      </div>
    )
  );
}