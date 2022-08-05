//This is in the format our API data would be after initial destructuring (which would happen in getPlacesData.js)
// You can check the correctness of this format by comparing it to the console.dir in index.js
export const places = [
  {
    category: "restaurant",
    name: "The Breakfast Club Soho",
    rating: "5.0",
    photo:
      "https://thebreakfastclubcafes.com/wp-content/uploads/2019/10/Berwick-St-6.jpg",
    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13521278619092814",
    latitude: "51.51226090514994",
    acessibility: {
      accessible: true,
      eye: true,  
      hearing: true, 
      brain: false,
      other1: null,
      other2: null
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.breakfastclub.com",
    opening_times: "7am-7pm",
  },
  {
    category: "cinema",
    name: "Prince Charles Cinema",
    rating: "4.0",
    photo:
      "https://images.savoysystems.co.uk/PCH/9504007.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13042340946513464",
    latitude: "51.51184071143942",
    acessibility: {
      accessible: true,
      eye: true,  
      hearing: true, 
      brain: true,
      other1: null,
      other2: null
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.princecharles.com",
    opening_times: "7am-7pm",
  },
  {
    category: "shop",
    name: "Big Sainsburys",
    rating: "3.0",
    photo:
      "https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OTM/sainsburysGettyImages-1192224191.jpg",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.1386631551988991",
    latitude: "51.51787642984117",
    acessibility: {
      accessible: true,
      eye: true,  
      hearing: false, 
      brain: false,
      other1: null,
      other2: null
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.sainsburys.com",
    opening_times: "7am-7pm",
  },
  {
    category: "gym",
    name: "Alpha Lobster Gym",
    rating: "3.0",
    photo:
      "https://www.firmdalehotels.com/media/863517/0166-sh-gym.jpg?a=1&anchor=center&mode=crop&width=1596&height=1088&bgcolor=fff&sig=2491ab2ab237c0021a1dadf66ff4295e",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.13119588562767506",
    latitude: "51.51683492491375",
    acessibility: {
      accessible: true,
      eye: false,  
      hearing: true, 
      brain: false,
      other1: null,
      other2: null
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.all-hail-the-lobster.com",
    opening_times: "7am-7pm",
  },
  {
    category: "cafe",
    name: "Roasted Beanz",
    rating: "1.0",
    photo:
      "data:image/png;base64,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",

    address: "18 Castle Street, Buckingham MK18 1BP England",
    longitude: "-0.1381910864329022",
    latitude: "51.50871571116749",
    acessibility: {
      accessible: true,
      eye: true,  
      hearing: true, 
      brain: false,
      other1: null,
      other2: null
    },
    phone_number: "+44 (0) 9845754223",
    web_address: "www.roastedbeanz.com",
    opening_times: "7am-7pm",
  },
];

/*Big card (master template):
-Name ✅ 
-Category (cinema, restaurant, gym, shop, café) ✅ 
- Street address (with postcode) ✅ 
-Accessibility badges (step-free, braille, sing_language, quiet_space) ✅ 
-Accesibility labels (one for each badge) ✅ 
-phone number ✅
-web address ✅
-opening times ✅
-picture ✅ */
