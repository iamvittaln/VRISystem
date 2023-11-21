import React from "react";
import "./css/Home.css"
import Navbar from "./NavBar";
export default function Home()
{
    return (
        <div className='bannerBG'>
            <Navbar home="Home" status="Status" aboutus="About Us" login="Login"/>
            <center>
                <div className='bannerHead'>
                    <p>Variable Rate Irrigation System</p>
                </div>
                <div className='bannerParagraph'>
                    <p>
                    Welcome to our IoT-powered Variable Rate Irrigation System developed for monitoring the Irrigation System!
                    Track the water level and the environmental conditions of the various regions across the Agriculture field by analyzing
                    various factors in real-time, promoting efficient water and sustainability.
                    </p>
                </div>
            </center>
        </div>
    )
}