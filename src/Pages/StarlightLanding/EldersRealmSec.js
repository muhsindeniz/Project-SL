import React, { useEffect, useState } from 'react'
import EldersLog from '../../assets/img/custom/elders-log.png';
import GameWellImg from '../../assets/img/custom/gamewellimg.png';

const EldersRealmSec = () => {
return (
    <section className="common-gapping elders-realm-sec">
        <div className="container">
            <div className="row">
                <div className="elders-realm-left-block">
                    <h2 className="sec-title">Providing you with the infrastructure to explore the universe.</h2>
                    <p className="text">Introducing Starlight's exclusive collaboration with Elders of the Realm 3D. A gaming experience where you'll have to navigate, negotiate and battle your way up to the throne of the universe. Use your SLX to trade unique characters and accessories in the metaverse.</p>
                </div>
                <div className="elders-realm-right-block">
                    <span className="elderslog-img-info">
                        <img src={EldersLog} />
                        <p>A Starlight collaboration</p>
                    </span>
                    <span className="game-well-img">
                        <img src={GameWellImg} />
                    </span>
                </div>
            </div>
        </div>
    </section>
    )
}
export default EldersRealmSec