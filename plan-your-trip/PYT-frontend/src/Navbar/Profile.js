import React, {  useEffect, useState } from 'react';
import './Profile.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

// function UserProfile(props){
//     console.log("UserName",props.userName);
//     return(
//         <div className="profileInfo">     
//             <div>User Info</div>       
//             <div>{props.tripData.name}</div>
//             <div>{props.tripData.age}</div>
//             <div>{props.tripData.phoneNumber}</div>
//             <div>{props.tripData.city}</div>
//             <div>{props.tripData.licence}</div>
//             <div>{props.tripData.noOfTravellers}</div>
//             <div>{props.tripData.fromDate}</div>
//             <div>{props.tripData.toDate}</div>
//         </div>
//     )
// }

export default function Profile(props){
    // const [prevTrips, setprevTrips] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9999/booking",{credentials:"include"})
        .then((r)=>r.json())
        .then((arr)=>{
            // setprevTrips(arr);
            console.log("booking fetch happened here");
        });
    }, []);
    return(
        <div>
            <NavBar/>
            <div className="userName">Hi, {props.userName}</div>
            {/* {props.prevTrips.map((name, age, phoneNumber,city, licence, noOfTravellers, address, car, fromDate,toDate) => (
                <UserProfile
                name={name} age phoneNumber city licence noOfTravellers fromDate toDate
                />
            ))} */}
            {/* {props.prevTrips.map((tripData) => (
                <UserProfile tripData={tripData} />
            ))} */}
            {/* <UserProfile/> */}
            <Footer/>
        </div>
    );
}