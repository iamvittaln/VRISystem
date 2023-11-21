import React from "react";
import NavBar from "./NavBar";
import Status from "./Status"
import { useLocation } from "react-router-dom";
export default function DashBoard() {
    const data = useLocation();
    console.log(data);
    const state = data.state;
    return (
        <>
        <Status state={state}/>
        </>
    )
}