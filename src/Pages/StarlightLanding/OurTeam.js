import React, { useEffect, useState } from 'react'

const OurTeam = ({
        image,
        name,
        position,
        bio,
        social
}) => {
return (
    <div className="our-team-wrapper">
        <div className="our-team-div">
            <div className="our-team-img">
                <img src={image} />
            </div>
            <div className="our-team-info">
                <h5>{name}</h5>
                <span className="position">{position}</span>
                <p>{bio}</p>
            </div>
            <div className="our-team-social-media">
                <a className="instagram" target="_blank" href={social}></a>
                </div>
        </div>
    </div>
    )
}
export default OurTeam




