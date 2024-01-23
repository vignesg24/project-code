import React from "react";
import TwoFace from "../Components/Two-Face/TwoFace";
import Gergraphy from "../Components/Geography/Geography";
import History from "../Components/History/History";
import Animal from "../Components/Animal/Animal";
import ThreeImg from "../Components/ThreeImg/ThreeImg";
export default function Destination(){
    return(
        <>
        <TwoFace />
        <ThreeImg />
        <Gergraphy />
        <History />
        <Animal />
        </>
    )
}