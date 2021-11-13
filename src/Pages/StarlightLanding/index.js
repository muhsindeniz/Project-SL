import React, { useState } from 'react'
import './style.css';
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import StarlBanner from './StarlBanner';
import PrimedandReady from './PrimedandReady';
import TimeWarpingSec from './TimeWarpingSec';
import AnEngagingSec from './AnEngagingSec';
import TheStarlightSec from './TheStarlightSec';
import CollectionsExculsiveSec from './CollectionsExculsiveSec';
import EldersRealmSec from './EldersRealmSec';
import ClimeworksSec from './ClimeworksSec';
import WeAreHereSec from './WeAreHereSec';
import StayUpdateSec from './StayUpdateSec';


const index = () => {
    return (
        <>
          <StarlBanner />
          <PrimedandReady />
          <TimeWarpingSec />
          <AnEngagingSec />
          <TheStarlightSec />
          <CollectionsExculsiveSec />
          <EldersRealmSec />
          <ClimeworksSec />
          <WeAreHereSec />
          <StayUpdateSec />
        </>
    )
}

export default index
