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
                            <h6>Jun 2021</h6>
                            <p>Napkin<br/> scribblings.</p>
                        </li>
                        <li className="active">
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 1: Dec 2021</h6>
                            <p>Soft<br/> launch.</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 2: Jan 2022</h6>
                            <p>Starlight v1<br/> launch.</p>
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
                            <p>Startlight <br/>Rewards launch.</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 4: May 2022</h6>
                            <p>Starlight v1.1<span>+ Profiles, Create <br/>Collectibles, Activity</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 3: Mar 2022</h6>
                            <p>Elders of the Realm 3D<span>Gateway collaboration</span></p>
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
                            <h6>Stage 3: Mar 2022</h6>
                            <p>Starlight App <br/>Development</p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 7: Sep 2022</h6>
                            <p>Starlight v1.2<span>+ In-game NFT <br/>exchange</span></p>
                        </li>
                        <li>
                            <span className="weare-here-hover">
                                We are here
                                <img src={Downarrow} />
                            </span>
                            <span className="weare-here-img">
                                <img src={InnerCircle} />
                            </span>
                            <h6>Stage 8: have your say.</h6>
                            <p>Global <br/>takeover.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
export default WeAreHereSec