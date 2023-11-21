import React from "react";
import "./css/Status.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
export default function Status(props)
{   
    const navigate=useNavigate();
    const handleClick = (e) => {
        const path=e.target.getAttribute(`name`);
        navigate(path);
    }
    return (
        <>
            <NavBar home="Home" status="Status" aboutus="About Us" login={props.state?"Log out":"Login"}/>
            <div className="bannerContainer">
                    <div className='bannerCardHolder'>
                        <div className='bannerCard1' onClick={handleClick} name="Rice">
                            <h3 className='bannerCardTitle'>Region 1</h3>
                            <p>Rice</p>
                        </div>
                        <div className='bannerCard2' onClick={handleClick} name="Barley">
                            <h3 className='bannerCardTitle'>Region 2</h3>
                            <p>Barley</p>
                        </div>
                        <div className='bannerCard3' onClick={handleClick} name="Wheat">
                            <h3 className='bannerCardTitle'>Region 3</h3>
                            <p>Wheat</p>
                        </div>
                        <div className='bannerCard4' onClick={handleClick} name="Corn">
                            <h3 className='bannerCardTitle'>Region 4</h3>
                            <p>Corn</p>
                        </div>
                </div>
            </div>
        </>
    )
}