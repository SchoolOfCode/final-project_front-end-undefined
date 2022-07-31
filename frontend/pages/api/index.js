import * as locationData from  './data.json'



export const getPlacesData = async (type, sw, ne) => {
 try {
  
 } catch (error) {
  console.log('fetch failed...', error)
  
 }
};


// import dataFile from './data.json'

// import axios from "axios";

// const url =
//   "loca";

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
//       {
//         params: {
//           bl_latitude: sw.lat,
//           tr_latitude: ne.lat,
//           bl_longitude: sw.lng,
//           tr_longitude: ne.lng,
//         },
//         headers: {
//           "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//           "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
//         },
//       }
//     );
//     console.log(JSON.stringify(data, null, 4));
//     return data;
//   } catch (error) {
//     console.log(`Fetch data Error : ${error}`);
//   }
// };
