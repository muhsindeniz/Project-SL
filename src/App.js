import React, { useEffect, useState } from 'react'
import './assets/css/veriables.css';
import './assets/css/app.css';
import './assets/css/navbar.css';
import 'antd/dist/antd.css';
import './assets/css/responsive.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import index from './Pages/StarlightLanding/index';

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
                <Navbar />
                <Switch>
                    <Route path="/index" component={index} exact />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App
