import React from "react";
import NavBar from "./NavBar";
import Regions from "./Regions";
export default function Barley(props) {
    return (
        <>
            <NavBar home="Home" status="Status" aboutus="About Us" login="Login"/>
            <Regions region="Barley"  source={(props.source) ? "dashboard":""}/>
            
        </>
    )
}