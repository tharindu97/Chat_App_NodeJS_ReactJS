import React from 'react'


const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="letfInnerContainer">
            <h2>Online</h2>
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><h2>Close</h2></a>
        </div>
    </div>
)

export default InfoBar;