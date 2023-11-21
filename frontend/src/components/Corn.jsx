import React from "react";
import NavBar from "./NavBar";
import Regions from "./Regions";
export default function Corn(props) {
    return (
        <>
            <NavBar home="Home" status="Status" aboutus="About Us" login="Login"/>
            <Regions region="Corn"  source={(props.source) ? "dashboard":""}/>
            
        </>
    )
}