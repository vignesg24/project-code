import React from "react";
import OurTravel from "../Components/OurTravel/OurTravel";
import FeatureTravel from "../Components/FeatureTravel/FeatureTravel";
import TravelsDetails from "../Components/TravelsDetails/TravelsDetails";
export default function TourList(){
    return(
        <>
        <OurTravel/>
        <TravelsDetails/>
        <FeatureTravel/>
        </>
    )
}