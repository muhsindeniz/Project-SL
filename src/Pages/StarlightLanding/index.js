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

const StarlightLanding = (props) => {
    
  const [tab, setTab ] = useState();
 console.log(tab);
 const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView() 
    return (
        <>
          <Navbar tab={tab} setTab={setTab} executeScroll={executeScroll}/>
          <StarlBanner />
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
          <div id="Community">
            <StayUpdateSec />
          </div>
          <Footer />
        </>
    )
}

export default StarlightLanding
