import React, { useState, useEffect } from 'react';
import './css/Regions.css';
import axios from "axios";

const Regions = (props) => {
    const [data, setData] = useState({
        "Temperature": "",
        "Humidity": "",
        "Soil Moisture": "",
        "Timestamp": "",
        "Motor Status": "",
    });
    useEffect(() => {
        fetchData();
        getTimeStamp();
    }, []);
    const region = props.region;
    const fetchData = () => {
        axios.get("http://localhost:3002/Region/" + region).then((response) => {
            setData(response.data[0]);
        })
            .catch((err) => {
                console.log("Error fetching data" + err)
            })
    }

    const pumpON = () => {
        axios.get("http://localhost:3002/pumpON/" + region).then((response) => {
            console.log(response.status, response.data);
            setData((data) => {
                return {
                    ...data,
                    "Motor Status": response.data["Motor Status"]
                }
            })
        })
            .catch((err) => {
                console.log("Error fetching data" + err)
            })
    }

    const pumpOFF = () => {
        axios.get("http://localhost:3002/pumpOFF/" + region).then((response) => {
            console.log(response.status, response.data);
            setData((data) => {
                return {
                    ...data,
                    "Motor Status": response.data["Motor Status"]
                }
            })
        })
            .catch((err) => {
                console.log("Error fetching data" + err)
            })

    }

    const getTimeStamp = () => {
        axios.get("https://worldtimeapi.org/api/timezone/Asia/Kolkata").then((response) => {
            const utc_time = response.data["utc_datetime"];
            const indexT = utc_time.indexOf('T');
            const date = utc_time.substring(0, indexT);
            const hour = parseInt(utc_time.substring(indexT + 1, utc_time.indexOf(":"))) + 5;
            const timestamp = date + ", " + hour + ":00:00";
            setData((data) => {
                return {
                    ...data,
                    "Timestamp": timestamp,
                }
            })
        })
    }
    return (
        <div className="region-container">
            <h1>Region: {props.region}</h1>
            <h2>Timestamp: {data.Timestamp}</h2>
            <table className="region-table">
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Value</th>
                        <th>Indicator</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((parameter, index) => (
                        parameter === "Timestamp" ? null : (
                            <tr key={index}>
                                <td>{parameter}</td>
                                <td>{data[parameter]}</td>
                                <td>{renderIndicator(parameter, data[parameter])}</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
            {props.source ? (<div className='buttonContainer'><button className='buttonOn' onClick={pumpON}>Turn on the Pump</button><button className='buttonOff' onClick={pumpOFF}>Turn off the Pump</button></div>) : ""}
        </div>
    );
};

const renderIndicator = (parameter, value) => {
    let indicatorColor = '';

    switch (parameter) {
        case 'Temperature':
            indicatorColor = getIndicatorColor(value, 10, 40, 'orange', 'green', 'red');
            break;
        case 'Humidity':
            indicatorColor = getIndicatorColor(value, 20, 60, 'red', 'orange', 'green');
            break;
        case 'Soil Moisture':
            indicatorColor = getIndicatorColor(value, 20, 80, 'red', 'orange', 'green');
            break;
        case 'Water Level':
            indicatorColor = getIndicatorColor(value, 30, 90, 'red', 'orange', 'green');
            break;
        case 'Motor Status':
            indicatorColor = (value === 'OFF') ? 'red' : 'green';
            break;
        default:
            break;
    }

    return (
        <div className="indicator-bar" style={{ backgroundColor: indicatorColor }}></div>
    );
};

const getIndicatorColor = (value, lowThreshold, highThreshold, lowColor, mediumColor, highColor) => {
    const numericValue = parseFloat(value);

    if (numericValue <= lowThreshold) {
        return lowColor;
    } else if (numericValue <= highThreshold) {
        return mediumColor;
    } else {
        return highColor;
    }
};

export default Regions;
