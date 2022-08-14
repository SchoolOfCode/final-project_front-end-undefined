<!-- ![](https://i.imgur.com/XgsioqF.jpg) -->

 <center>
<img src="./public/logo.png" style="width: 500px" />
</center>


<center>
 <span style="color:#17CEDA; font-weight: 600;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  ✨ Helping you find what you need, where you need it. ✨  </span> 
</center>

</br></br></br></br></br></br></br></br></br>



## Table Of Contents

</br>

&nbsp; &nbsp;[Introduction](#♿-access-app)

&nbsp; &nbsp;[Problem](#x-the-problem)

&nbsp; &nbsp;[Solution](#whitecheckmark-our-solution)

&nbsp; &nbsp;[Features](#➕-features)

&nbsp; &nbsp;[Getting Started](#🏁-getting-started)

&nbsp; &nbsp;[Environmental Variables](#🔑-environment-variables)

&nbsp; &nbsp;[Tech Stack](#👩‍💻-tech-stack)

&nbsp; &nbsp;[API Reference](#📚-api-reference)

&nbsp; &nbsp;[Running Tests](#🧪-running-tests)

&nbsp; &nbsp;[About Us](#🚀-about-us)

&nbsp; &nbsp;[Lessons Learned](#🎓-lessons-learned)

&nbsp; &nbsp;[Team Github Profiles](#🔗-team-github-profiles)

&nbsp; &nbsp;[Acknowledgements](#❤️-acknowledgements)



</br></br>
</br></br>







## ♿ Access+ App
</br>

&nbsp;Checkout our LIVE app here: 

&nbsp;https://accessu-undefinedsoc.vercel.app/

</br>

&nbsp; Hello and thanks for your interest in our web app.

&nbsp; We hope you find this document helpful in understanding the problem we aimed to solve, the solution&nbsp; &nbsp; or app we created to solve this problem, how to install the app, details about what's going on in the &nbsp; &nbsp; &nbsp; &nbsp; code and how to use it. 

</br></br>

## :x: The Problem 

</br>

- 1 in 4 households are impacted by disability
  

- 98% of disabled people look for accessibility information before visiting somewhere for the first time.

- Over 75% of disabled people don’t visit somewhere they wanted to go because they couldn’t find the accessibility information they needed.

- This results in disabled people making 26% fewer trips than those without a disability.

</br></br>

[Back to Top](#table-of-contents)

</br>

## :white_check_mark: Our Solution 

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Access+ is here to take the stress out of planning. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our aim is to provide you with all the accessibility information you need in order to feel assured & 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wherever you want to go has what you need. 

</br>

[Back to Top](#table-of-contents)

</br></br>

![GitHub last commit](https://img.shields.io/github/last-commit/SchoolOfCode/final-project_front-end-undefined)
![GitHub contributors](https://img.shields.io/github/contributors/SchoolOfCode/final-project_front-end-undefined)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/SchoolOfCode/final-project_front-end-undefined)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/SchoolOfCode/final-project_front-end-undefined)
![Lines of code](https://img.shields.io/tokei/lines/github/SchoolOfCode/final-project_front-end-undefined)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/SchoolOfCode/final-project_front-end-undefined)

</br>

[Back to Top](#table-of-contents)

</br>

## ➕ Features

</br>

- Welcome Tutorial to Walk You Through the Features of the App.
- Add the Location You'd Like to Visit to the Search Input.
- Dropdown to Choose Your Category From What?.
- Dropdown to Choose the Accessbility Rating.
- Search Button to Enable Your Search Filters/Preferences.
- Search Results Return as Individual Cards on Left Of Screen
- Click on Any Card For More Information About That Place
- Add Location Button To Add A Place to Our Database.
- Change the Map Styling with the Map Style Button to Suit Your Needs

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🏁 Getting Started

</br>

### Front End.

</br>

Step 1.

First, change into the folder you'd like the repository to live in.

Step 2.

Git clone the front end repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-undefined.git
```

Step 3.

To start using the front end, do the following.

```bash
  cd frontend
  npm i
  npm start
```

</br>

### Back End

</br>

Step 1.

First, change into the folder you'd like the repository to live in.

Step 2.

Git clone the back end repository.

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-undefined.git
```

Step 3.

Add environment variables into your .env file in your IDE.(Details in Environment Variables section)

Step 4.

To start using the back end, do the following.

```bash
  npm i
  npm run dev
```

</br>

[Back to Top](#table-of-contents)
</br></br>

## 🔑 Environment Variables

</br>

To run the back end repo of this project, you will need to add your own credentials from the database you're using to draw from. (e.g.: Heroku)

In your .env file, you'll need to use the following format.

```

PGHOST=

PGUSER=

PGDATABASE=

PGPASSWORD=

PGPORT=

```

</br>

After this, first run the create table script in the terminal.

```
npm run db:createPlacesTable
```

Next, populate the table with the data from the libs folder with the following script.

```
npm run db:populatePlacesTable
```

If you'd like to reset the table, run the following script:

```
npm run db:resetPlacesTable

```

If you'd like to drop the table completely, run the following script:

```
npm run db:dropPlacesTable

```

If you'd like to drop the table completely, run the following script:

```
npm run db:dropPlacesTable

```



</br>

[Back to Top](#table-of-contents)
</br></br>

## 👩‍💻 Tech Stack

</br>

**Client:** Next js, Chakra UI, Material UI, Google Maps API, Jest, Cypress

**Server:** Node, Express, PostgreSQL, Supertest

</br>

[Back to Top](#table-of-contents)

</br></br>

## 📚 API Reference

</br>

### To GET All Resources:

</br>

GET http://localhost:3000/places/

This returns the entire contents of the database.

</br>

### To GET Resources by ID:

</br>

GET http://localhost:3000/places/{id}

e.g. GET http://localhost:3000/places/4

</br>

This returns:

```
 {

"success": true,

 "payload": [
     {
        category: "restaurant",
    name: "Katya's Stolovaya",
    rating: "2.0",
    photo:
      "https://static01.nyt.com/images/2019/12/15/travel/04moscow-restaurants-nostalgia14/merlin_164050035_f02f14a5-a9be-49bc-bea0-926aa064a13e-mobileMasterAt3x.jpg",
    alt: "Indoor seating area of Katya's Stolovaya restaurant with wallpaper filled with various images of musicians and guitars pinned to the wall and yellow light fittings",
    address: "19/84 Orwell Street, W1 6CO",
    longitude: "-0.13321278619092814",
    latitude: "51.51226090514994",
    accessible: false,
    eye: false,
    hearing: false,
    brain: false,
    phone_number: "+44 (0) 9845754223",
    web_address: "https://restaurantguru.com/Canteen-No-16-Saint-Petersburg",
    opening_times: "7am-7pm"
     }
 ]

}
```

</br>

### To Delete Entry From Database:

</br>

DELETE: http://localhost:3000/places/{id}

</br>

e.g. DELETE http://localhost:3000/places/5

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🧪 Running Tests

</br>

To run tests, run the following commands..

</br>

### Front End

The front end runs unit tests based from the Jest and React Testing Library.

```bash
  npm run test
```

</br>

The second front end runs end 2 end tests based from Cypress.

```bash
  ./node_modules/.bin/cypress open
```

</br>

### Back End

The back end runs tests in Supertest and Jest.

```bash
  npm run test
```

[Back to Top](#table-of-contents)
</br></br>

## 🚀 About Us

</br>

We're a group of six young, talented, ambitious full stack developers that wanted to create an app that helped find places around the world that accomodate better for those with accessibility needs. 

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🎓 Lessons Learned

</br>

Teamwork makes the dream work..

</br>

</br>

A good plan always makes the day run smoother, not perfect, but much better overall. 

</br>

</br>

The plan is a living document and can always be iterated upon as you go, it doesn't need to be perfect. 

</br>

Break down every problem and then do it again and again..

</br>

Standups and Retros really helped us keep a great rhythm and revise our plan incrementally..

</br>

Keep open communication and share the problems you have when needed, we’re better together..

</br>

Take your breaks after the mini sprints, stay hydrated and encourage everyone to take a break from the screen..

</br>

Let things go if need be.. Sometimes it’s just not worth it..

</br>

[Back to Top](#table-of-contents)

</br></br>

## 🔗 Team Github Profiles

</br>

[Phoebe Francis](https://github.com/phoebefrances)

</br>

[Philip Kaminski](https://github.com/AureaFlamma)

</br>

[Kieran Dickerson](https://github.com/kd071090)

</br>

[Kendall Mason](https://github.com/kendallgmason)

</br>

[Shabana Kauser](https://github.com/shabana89)

</br>

[Back to Top](#table-of-contents)

</br></br>

## ❤️ Acknowledgements

</br>

- [Chris Meah's Express generator module](https://www.npmjs.com/package/express-generator-esmodules)

 </br>

- [React Hooks by Robin Wieruch](https://www.robinwieruch.de/react-hooks-fetch-data/)

 </br>

- [Async functions with useeffect by devtrium](https://devtrium.com/posts/async-functions-useeffect)

 </br>

- [How to handle multiple inputs in React](https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el)

 </br>

- [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

 </br>

- [React + Fetch - HTTP POST Request Examples | Jason Watmore's Blog](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

 </br>

[Back to Top](#table-of-contents)

