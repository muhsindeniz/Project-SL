import React, { useState, useRef } from 'react'
import './style.css';
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import StarlBanner from './StarlBanner';
import PrimedandReady from './PrimedandReady';
import TimeWarpingSec from './TimeWarpingSec';
import AnEngagingSec from './AnEngagingSec';
import TheStarlightSec from './TheStarlightSec';
import EldersRealmSec from './EldersRealmSec';
import ClimeworksSec from './ClimeworksSec';
import WeAreHereSec from './WeAreHereSec';
import StayUpdateSec from './StayUpdateSec';
import Cummunity from './Cummunity';
import Navbar from '../../Components/Layout/Navbar';
import Footer from '../../Components/Layout/Footer';
import OurTeam from './OurTeam';
import Partnerships from './Partnerships';

import team1 from '../../assets/img/team/team1.png'
import team2 from '../../assets/img/team/team2.png'
import team3 from '../../assets/img/team/team3.png'
import team4 from '../../assets/img/team/team4.png'

const StarlightLanding = (props) => {
    
  const [tab, setTab ] = useState();
 console.log(tab);
 const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView() 
    return (
        <>
          <Navbar tab={tab} setTab={setTab} executeScroll={executeScroll}/>
          <StarlBanner />
          <div className="all-warp">
            <div id="ourVision">
              <PrimedandReady />
              <Cummunity/>
              <TimeWarpingSec />
            </div>
            <div id="Platform">
              <AnEngagingSec />
              <EldersRealmSec />
            </div>
            <div id="SLXToken">
              <TheStarlightSec />
            </div>
            <div id="Roadmap">
              <WeAreHereSec />
              <ClimeworksSec />
            </div>
            <div id="OurTeam">
                <h3 className="sec-title">The Starlight Team</h3>
                <div className="our-team-container">
                  <OurTeam 
                    image={team1}
                    name="Ash"
                    position="Director of Product"
                    bio="Creative entrepreneur, innovator and blockchain enthusiast. Founder of five established companies in multiple sectors."
                    social="https://www.linkedin.com/in/ash-stephenson/"
                  />
                  <OurTeam 
                    image={team2}
                    name="Zadkiel"
                    position="Director of Marketing and Operations"
                    bio="Experience in marketing and operations in various startups. Worked in fashion, creative and tech industries."
                    social="https://www.linkedin.com/in/zadkielyeo/"
                  />
                  <OurTeam 
                    image={team3}
                    name="Mark"
                    position="Head of Digital Community"
                    bio="Community manager, blockchain expert and social media marketer. Involved in projects in the film, finance and technology sectors."
                    social="https://www.linkedin.com/in/marklawson95/"
                  />
                  <OurTeam 
                    image={team4}
                    name="Tony"
                    position="Head of Partnerships"
                    bio="Passionate about building connections and networking across industries. Experienced partnership creator, nomadic at heart and coffee geek."
                    social="https://www.linkedin.com/in/tnruiz/"
                  />
                </div>
            </div>
            <div id="partnership">
              <Partnerships />
            </div>
            <div id="Community">
              <StayUpdateSec />
            </div>
            <Footer />
          </div> 
        </>
    )
}

export default StarlightLanding
