import React from "react";
import Background from "../Components/Background/Background";
import Trips from "../Components/Trips/Trips";
import Animal from "../Components/Animal/Animal";
import TravelExp from "../Components/TravelExp/TravelExp";
import TreeBg from "../Components/TreeBg/TreeBg";
import Profile from "../Components/Profile/Profile";
export default function Home(){
    return(
        <>
        <Background />
        <Trips/>
        <Animal />  
        <TravelExp />
        <TreeBg />
        <Profile />
        </>
    )
}