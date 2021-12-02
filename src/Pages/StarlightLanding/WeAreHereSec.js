import React, { useEffect, useState } from 'react'
import Downarrow from '../../assets/img/icons/custom/downarrow.svg';
import InnerCircle from '../../assets/img/custom/innercircle.png';
import { Link, useLocation } from "react-router-dom";

const WeAreHereSec = () => {
return (
    <section className="common-gapping weare-here-sec">
        <div className="container">
            <div className="roadmap">
                <h2 className="sec-title">Starlight roadmap:</h2>
                <p className="text">A peak into the future. Project priority is decided<br/>by the Starlight community. <b>Have your say.</b>
                </p>
            </div>
            <div className="weare-here-block">
                <div className="weare-here-list-full-list">
                    <ul className="weare-here-list"> 
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Apr 2021</h6>
                            <p>Napkin scribblings.</p>
                        </li>
                        <li className="active">
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 1: Sep 2021</h6>
                            <p>Marketplace front-end </p><p><br/> implementation.</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 2: Dec 2021</h6>
                            <p>Launchpads and initial </p><p> marketing plan deployment.</p>
                        </li>
                    </ul>
                    <ul className="weare-here-list">
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 5: May 2022</h6>
                            <p>Starlight Marketplace MVP v1.2 <br/> <span>+ Rewards, Forge</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 4: Mar 2022</h6>
                            <p>Starlight Marketplace MVP v1.1 <br/><span>+ Gallery, Trade Toolse</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 3: Feb 2022</h6>
                            <p>Starlight Marketplace MVP v1 launch <br/><span>Featuring exclusive NFT collections</span> </p>
                        </li>
                    </ul>
                    <ul className="weare-here-list">
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 6: Jun 2022</h6>
                            <p>Elders of the Ream 3D:<br/><span>Meta-bridge Force collaboration</span></p>
                            <p>Starlight Marketplace App:<br/><span>Development begins</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 7: Aug 2022</h6>
                            <p>Starlight Marketplace MVP v1.3<br/><span>+ Factory, Launchpads</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 8: Sep 2022</h6>
                            <p>Meta-bridge Drive API launch.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
export default WeAreHereSec