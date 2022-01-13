import React from 'react'
import "./LocationInfo.css"

export const LocationInfo = ({ name, type, residents, dimension }) => {
    return (
        <div className='container'>
            <img src="https://larepublica.pe/resizer/91FvLyr6sNkx6Q9NycJLy4nN0oE=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/PCNCJ6R3FFGITHPO5YQRH3RQW4.jpg" alt="" />
            <div className='location'>
                <h1>{`Location: ${name}`}</h1>
                <div className='location-info'>
                    <li><span>Type: </span>{type}</li>
                    <li><span>Dimension: </span>{ dimension === "unknown" ? "------" : dimension}</li>
                    <li><span>Amount's Residents: </span>{residents?.length}</li>
                </div>
            </div>
        </div>
    )
}

