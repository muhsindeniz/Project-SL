import React, { useEffect, useState } from 'react'
import './assets/css/veriables.css';
import './assets/css/app.css';
import './assets/css/navbar.css';
import 'antd/dist/antd.css';
import './assets/css/responsive.css';
import StarlightLanding from './Pages/StarlightLanding/index';

import 'swiper/swiper-bundle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                
                <Switch>
                    <Route path="/" component={StarlightLanding} exact />
                </Switch>
                
            </Router>
        </>
    )
}

export default App
