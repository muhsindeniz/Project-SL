import React, { useEffect, useState } from 'react'
import EldersLog from '../../assets/img/custom/seven-realms.png';
import GameWellImg from '../../assets/img/custom/gamewellimg.png';
import mobileGameWellImg from '../../assets/img/custom/mobile-gamewellimg.png';

const EldersRealmSec = () => {
return (
    <section className="common-gapping elders-realm-sec">

        <div className="white-bg">
            <div className="container">
                <div className="elders-realm-right-block">
                    <span className="elderslog-img-info">
                        <img src={EldersLog} />
                        <p>Exclusive metaverse game collaboration</p>
                        <div className="elders-realm-left-block">
                            <p className="text">Introducing Starlight's exclusive collaboration with Seven Realms 3D. A gaming experience where you'll have to navigate, negotiate and battle your way up to the throne of the universe. Use your NEUM token to trade unique characters and accessories in the metaverse.</p>
                        </div>
                    </span>
                </div>
            </div>    
        </div>

        <div className="elders-bg">
            <div className="container">
                <span className="game-well-img">
                    <img className="desktop" src={GameWellImg} />
                    <img className="mobile" src={mobileGameWellImg} />
                </span>
            </div>
        </div>
    </section>
    )
}
export default EldersRealmSec