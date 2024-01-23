import React from "react";
import SeaBoat from "../Components/SeaBoat/SeaBoat";
import GetInspired from "../Components/GetInspried/GetInspired";
import OurGuides from "../Components/OurGuides/OurGuides";
import FromCom from "../Components/StartCom/FromCom";
export default function PrivateTour(){
    return(
        <>
        <SeaBoat />
        <GetInspired/>
        <FromCom />
        <OurGuides/>
        </>
    )
}