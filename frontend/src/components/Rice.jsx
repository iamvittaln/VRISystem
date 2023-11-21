import React from "react";
import NavBar from "./NavBar";
import Regions from "./Regions";
export default function Rice(props) {
    return (
        <>
            <NavBar home="Home" status="Status" aboutus="About Us" login="Login"/>
            <Regions region="Rice" source={(props.source) ? "dashboard":""}/>
        </>
    )
}
