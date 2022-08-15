import { borderColor } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";


const emptyPlaceDetails = {
    category: "",
    name: "",
    rating: "",
    photo: "",
    address: "",
    longitude: "",
    latitude: "",
    accessible: false,
    eye: false,
    hearing: false,
    brain: false,
    phone_number: "",
    web_address: "",
    opening_times: "",
}

const AddAPlaceForm = () => {

//Form Collection 
    const [categoryInput, setCategoryInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [ratingInput, setRatingInput] = useState('')
    const [photoInput, setPhotoInput] = useState('')
    const [addressInput, setAddressInput] = useState('')
    const [longitudeInput, setLongitudeInput] = useState('')
    const [latitudeInput, setLatitudeInput] = useState('')
    const [accessibleInput, setAccessibleInput] = useState(false)
    const [eyeInput, setEyeInput] = useState(false)
    const [hearingInput, setHearingInput] = useState(false)
    const [brainInput, setBrainInput] = useState(false)
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [webAddressInput, setWebAddressInput] = useState('')
    const [openingTimesInput, setOpeningTimesInput] = useState('')

// Form Data
const [formData, setFormData] = useState(emptyPlaceDetails)

useEffect(() => {
    function updateFormData() {
       setFormData({
          ...formData,
          category: categoryInput,
          name: nameInput,
          rating: ratingInput,
          photo: photoInput,
          address: addressInput,
          longitude: longitudeInput,
          latitude: latitudeInput,
          accessible: accessibleInput,
          eye: eyeInput,
          hearing: hearingInput,
          brain: brainInput,
          phone_number: phoneNumberInput,
          web_address: webAddressInput,
          opening_times: openingTimesInput
       });
       console.log(formData);
    }
    updateFormData();
 }, [
    categoryInput,
    nameInput,
    ratingInput,
    photoInput,
    addressInput,
    longitudeInput,
    latitudeInput,
    accessibleInput,
    eyeInput,
    hearingInput,
    brainInput,
    phoneNumberInput,
    webAddressInput,
    openingTimesInput
 ]);

 const categoryChangeHandler = event => {
    setCategoryInput(event.target.value);
  };

  const nameChangeHandler = event => {
    setNameInput(event.target.value);
  };

  const ratingChangeHandler = event => {
    setRatingInput(event.target.value);
  };

  const photoChangeHandler = event => {
    setPhotoInput(event.target.value);
  };

  const addressChangeHandler = event => {
    setAddressInput(event.target.value);
  };

  const longitudeChangeHandler = event => {
    setLongitudeInput(event.target.value);
  };

  const latitudeChangeHandler = event => {
    setLatitudeInput(event.target.value);
  };

  const accessibleChangeHandler = event => {
    setAccessibleInput(event.target.value);
  };

  const eyeChangeHandler = event => {
    setEyeInput(event.target.value);
  };

  const hearingChangeHandler = event => {
    setHearingInput(event.target.value);
  };

  const brainChangeHandler = event => {
    setBrainInput(event.target.value);
  };

  const phoneNumberChangeHandler = event => {
    setPhoneNumberInput(event.target.value);
  };

  const webAddressChangeHandler = event => {
    setWebAddressInput(event.target.value);
  };

  const openingTimesChangeHandler = event => {
    setOpeningTimesInput(event.target.value);
  };

  async function sendFormData(formData) {
    console.log("FORM DATA HERE", formData);
    const res = await fetch(`https://places-table-undefined.herokuapp.com/places`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit working, here is the form data", formData);
    sendFormData(formData);
  }

  return ( 
     
  <form className="place_form">

  <style jsx>{`

  .place_form {
  width: 800px;
  heigh: 1000px;
  margin-left: 100px;

  }
 .place_form_fieldset {
      background: white;
      border: 4px;
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
      padding: 20px 30px;
      width: 1000px;
      height: 1480px;
      max-width: 100%;
      margin-left: 400px;
    }
  .place_form_input {
      padding: 25px;
      border: 2px solid #ccc;
      border-color: #FF9100;
      border-radius: 3px;
      margin-bottom: 10px;
      width: 100%;
      color:  #032396;
      font-weight: bold;
      font-size: 20px;

  }
  .place_form_button {
      width: 600px;
      background: linear-gradient(to right, #17CEDA, #0954a9, #032396);
      font-weight: bold;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      padding: 10px 5px;
      margin-left: 80px;
  }
  .place_form_title {
      font-weight: bold;
      font-size: 25px;
      text-transform: uppercase;
      color: #032396;
      margin-bottom: 10px;
      margin-left: 250px;
    }
  .ul {
  list-style-type: none;
  width: 400px;
  height: 400px;
  padding: 25px;
  border: 2px solid;
  border-color:  #FF9100;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  color: #0954a9;
  font-weight: bold;
  font-size: 20px;
  }
 
            `}
  </style>

  <fieldset className='place_form_fieldset'>
  <h2 className="place_form_title">Add Place Details</h2>
    <input 
    className='place_form_input'
    type="text"
    name="category"
    placeholder="Category"
    onChange={categoryChangeHandler} />

    <input 
    className='place_form_input'
    type="text" 
    name="name"
    placeholder="Name"
    onChange={nameChangeHandler}
    />
    
    <input 
    className='place_form_input'
    type="text"
    name="rating"
    placeholder="Rating"
    onChange={ratingChangeHandler} />

    <input 
    className='place_form_input'
    type="text" 
    name="image" 
    placeholder="Image"
    onChange={photoChangeHandler} />
  
    <input 
    className='place_form_input'
    type="text"
    name="address"
    placeholder="Address"
    onChange={addressChangeHandler} />

    <input 
    className='place_form_input'
    type="text"
    name="longitude"
    placeholder="Longitude"
    onChange={longitudeChangeHandler} />

    <input 
    className='place_form_input'
    type="text" 
    name="latitude" 
    placeholder="Latitude"
    onChange={latitudeChangeHandler} />

    <input
    className='place_form_input'
    type="text" 
    name="Phone Number" 
    placeholder="Phone Number"
    onChange={phoneNumberChangeHandler}
    />

    <input
    className='place_form_input'
    type="text"
    name="Web Address"
    placeholder="Web Address"
    onChange={webAddressChangeHandler} />

    <input 
    className='place_form_input'
    type="text" 
    name="Opening Times" 
    placeholder="Opening Times"
    onChange={openingTimesChangeHandler} />

<ul className="ul">
    <label style= {{color: `#032396`}}> Mobility access </label>
        <li> True
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'True'
            value= {true}
            onChange={accessibleChangeHandler}
          />
          </li>
          <li> False
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={accessibleChangeHandler}
          />
          </li>
      <label style= {{color: `#032396`}}> Visual access </label>
        <li> True
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'True'
            value= {true}
            onChange={eyeChangeHandler}
          />
          </li>
          <li> False
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={eyeChangeHandler}
          />
        </li>
 
        <label style= {{color: `#032396`}}> Hearing access </label>
        <li> True
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'True'
            value= {true}
            onChange={hearingChangeHandler}
          />
          </li>
          <li> False
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={hearingChangeHandler}
          />
        </li>
        <label style= {{color: `#032396`}}> Neurodivergent friendly </label>
        <li> True
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name='true'
            value= {true}
            onChange={brainChangeHandler}
          />
          </li>
          <li> False
          <input
            style= {{marginLeft: `10px`}}
            type="checkbox"
            name= 'False'
            value= {false}
            onChange={brainChangeHandler}
          />
        </li>
        </ul>


    <input 
    type="submit" 
    name="submit" 
    className="place_form_button" 
    value="Submit a Place"
    formData={formData}
    onClick={handleSubmit} />
  </fieldset>
</form>
   
  );
};

 
export default AddAPlaceForm;

