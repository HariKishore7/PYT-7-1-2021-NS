import React,{useState} from "react";
import "./BookingForm.css";
import NavBar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Profile from '../Navbar/Profile';
import logo from "./FormImg.svg";
// import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

export default function Form(props) {
  const [prevTrips, setprevTrips] = useState([]);
  const [newTrip, setnewTrip] = useState({
    name:"", age:"", phoneNumber:"", city:"", licence:"", noOfTravellers:"",
    address:"", car:"", fromDate:"", toDate:"",
  });

  const handleChange = e =>{
    // const {name,age,phoneNumber,city,licence,noOfTravellers,address,car,fromDate,toDate}=e.target;
    const {name, value}=e.target;
    let newState = {...newTrip, [name]:value}
    setnewTrip(newState);
    
  }

  function CostSlider(){
    return(
      <div className="slidecontainerbf">
        <h1>Calculate the cost of  trip</h1>
        <input type="range" min="10" max="96" defaultValue="24" className="slider" id="myRange1"></input>
        <p>Hours: <span id="hours"></span></p>
        <p>Price: <span id="price1"></span></p>
        <input type="range" min="5" max="15" defaultValue="1" className="slider" id="myRange2"></input>
        <p>Days: <span id="days"></span></p>
        <p>Price: <span id="price2">0</span></p>
      </div>
    )
  }
  // let history = useHistory();

  const bookingHandler = (e, ) => {
    console.log("PYT",newTrip);
    e.preventDefault();
    fetch("http://localhost:8000/booking", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        // history.push("/successScreen");
        console.log("Back data here");
        prevTrips.push(r);
        setprevTrips([...prevTrips]);
        // setnewTrip("");
        setnewTrip({});

        console.log("Booking data",r);
        return { success: true };
      } else {
        return r.json();
      }
    });
  };

  return (
    <>
      <NavBar />
      <img className="sideimgbook" src={logo} alt="sideimg"></img>
        <CostSlider/>
        <div className="form-containerbook">
          <form action="#">
            <h1>Fill the Form</h1>
            <div className="inputfieldsbook">
              <input type="text" required placeholder="Name" name="name" value={newTrip.name} onChange={handleChange}/>
              <input type="number" required placeholder="Age" name="age" value={newTrip.age} onChange={handleChange} />
              <input type="tel" required placeholder="Phone Number" name="phoneNumber" value={newTrip.phoneNumber} onChange={handleChange} />
              <input type="text" required placeholder="city" name="city" value={props.city}  onChange={handleChange}/>
              <input type="password" required placeholder="Driving Licence Number" name="licence" value={newTrip.licence} onChange={handleChange} />
              <input type="number" required placeholder="Number of travellers" name="noOfTravellers" value={newTrip.noOfTravellers} onChange={handleChange}/>
              <input type="text" required placeholder="Please provide your current Address" name="address" value={newTrip.address} onChange={handleChange} />
              <div className="chooseacar">Choose a car : </div>
              <select id="cars" required name="car" value={newTrip.car}  onChange={handleChange}>
                <option value="Selectacar">Select a Car</option>
                <optgroup label="Five Seater">
                  <option value="Swift Dezire">Swift Dezire</option>
                  <option value="Renault Kwid">Renault Kwid</option>
                  <option value="Hyundai Creta">Hyundai Creta</option>
                </optgroup>
                <optgroup label="Seven Seater">
                  <option value="Innova">Innova</option>
                  <option value="Duster">Duster</option>
                  <option value="Fortuner">Fortuner</option>
                </optgroup>
                <optgroup label="Luxury">
                  <option value="MgHector">MgHector</option>
                  <option value="Kia">Kia</option>
                  <option value="Jeep">Jeep</option>
                </optgroup>
              </select>
              <p>FROM:</p>
              <input type="date" required name="fromDate" placeholder="date of trip" value={newTrip.fromDate} onChange={handleChange} />
              <p>TO:</p>
              <input type="date" required name="toDate" placeholder="date of trip" value={newTrip.toDate} onChange={handleChange} />
            </div>
            <button onClick={bookingHandler} className="booknowbook">Book Now</button>
          </form>
        </div>
        <Footer/>
        <Router>
          <Switch>
            <Route path="/Profile" >
              {/* <Profile name age phoneNumber licence noOfTravellers fromDate toDate/> */}
              <Profile prevTrips={prevTrips}/>
            </Route>
          </Switch>
        </Router>
  </>
  );
}
