import React, { useEffect, useState } from 'react'
import searchLine from "../../assets/img/icons/custom/search-line.svg";
import vectorLogo from "../../assets/img/custom/Vector.svg";
import menu4Line from "../../assets/img/icons/custom/menu-4-line.svg";
import userProfilePictures from "../../assets/img/icons/custom/userNav.svg";
import fabaLogo from "../../assets/img/custom/x.png";
import userTick from "../../assets/img/icons/custom/logo.svg";
import grayPp from "../../assets/img/custom/grayPp.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    const [openProfileDropMenu, setOpenProfileDropMenu] = useState(false);
    const [notificationPopup, setNotificationPopup] = useState(false);


    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === true) {
            document.documentElement.style.setProperty('--bg-main', '#121212');
            document.documentElement.style.setProperty('--bg-card', '#181818');
            document.documentElement.style.setProperty('--bg-white', '#000');
            document.documentElement.style.setProperty('--black-color', '#fff');
            document.documentElement.style.setProperty('--gray-bg', '#232323');
            document.documentElement.style.setProperty('--white-color', '#111');
            document.documentElement.style.setProperty('--black-text', '#fff');
            document.documentElement.style.setProperty('--gray-color', '#979797');
            document.documentElement.style.setProperty('--faq-container', '#000');
            document.documentElement.style.setProperty('--slider-opacity-card', '0, 0, 0');
            document.documentElement.style.setProperty('--btn-light-white', '#232323');
            document.documentElement.style.setProperty('--text-light-color', '#8D9299');
            document.documentElement.style.setProperty('--notification-ping-bg', "#402F5B");
            document.documentElement.style.setProperty('--footer-input-bg', "#C7C7C7");
            document.documentElement.style.setProperty('--bg-main-white', "#121212");


        } else {
            document.documentElement.style.setProperty('--bg-main', '#FCFCFC');
            document.documentElement.style.setProperty('--bg-card', '#fff');
            document.documentElement.style.setProperty('--bg-white', '#fff');
            document.documentElement.style.setProperty('--black-color', '#000');
            document.documentElement.style.setProperty('--gray-bg', '#EDEDED');
            document.documentElement.style.setProperty('--white-color', '#fff');
            document.documentElement.style.setProperty('--black-text', '#000');
            document.documentElement.style.setProperty('--gray-color', '#9D9D9D');
            document.documentElement.style.setProperty('--faq-container', '#1a252f');
            document.documentElement.style.setProperty('--slider-opacity-card', '255, 255, 255');
            document.documentElement.style.setProperty('--btn-light-white', '#fff');
            document.documentElement.style.setProperty('--text-light-color', '#111');
            document.documentElement.style.setProperty('--notification-ping-bg', "#F7F2FF");
            document.documentElement.style.setProperty('--footer-input-bg', "#fff");
            document.documentElement.style.setProperty('--bg-main-white', "#fff");
        }
    }, [theme])

    let activeMode = () => {
        setTheme(!theme)
        localStorage.setItem('theme', theme);
        if (theme === true) {
            document.documentElement.style.setProperty('--bg-main', '#121212');
            document.documentElement.style.setProperty('--bg-card', '#181818');
            document.documentElement.style.setProperty('--bg-white', '#000');
            document.documentElement.style.setProperty('--black-color', '#fff');
            document.documentElement.style.setProperty('--gray-bg', '#232323');
            document.documentElement.style.setProperty('--white-color', '#111');
            document.documentElement.style.setProperty('--black-text', '#fff');
            document.documentElement.style.setProperty('--gray-color', '#979797');
            document.documentElement.style.setProperty('--faq-container', '#000');
            document.documentElement.style.setProperty('--slider-opacity-card', '0, 0, 0');
            document.documentElement.style.setProperty('--btn-light-white', '#232323');
            document.documentElement.style.setProperty('--text-light-color', '#8D9299');
            document.documentElement.style.setProperty('--gray-bg-color', '#fff');
            document.documentElement.style.setProperty('--notification-ping-bg', "#402F5B");
            document.documentElement.style.setProperty('--footer-input-bg', "#C7C7C7");
            document.documentElement.style.setProperty('--bg-main-white', "#121212");
        } else {
            document.documentElement.style.setProperty('--bg-main', '#FCFCFC');
            document.documentElement.style.setProperty('--bg-card', '#fff');
            document.documentElement.style.setProperty('--bg-white', '#fff');
            document.documentElement.style.setProperty('--black-color', '#000');
            document.documentElement.style.setProperty('--gray-bg', '#EDEDED');
            document.documentElement.style.setProperty('--white-color', '#fff');
            document.documentElement.style.setProperty('--black-text', '#000');
            document.documentElement.style.setProperty('--gray-color', '#9D9D9D');
            document.documentElement.style.setProperty('--faq-container', '#1a252f');
            document.documentElement.style.setProperty('--slider-opacity-card', '255, 255, 255');
            document.documentElement.style.setProperty('--btn-light-white', '#fff');
            document.documentElement.style.setProperty('--text-light-color', '#111');
            document.documentElement.style.setProperty('--gray-bg-color', '#8D9299');
            document.documentElement.style.setProperty('--notification-ping-bg', "#F7F2FF");
            document.documentElement.style.setProperty('--footer-input-bg', "#fff");
            document.documentElement.style.setProperty('--bg-main-white', "#fff");
        }
    }

    const [headerbg, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <>
            {/* {
                location.pathname === "/Profile" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                    location.pathname === "/Buy" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                        location.pathname === "/CreateCollectibleEdit" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                            location.pathname === "/SignIn" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                                location.pathname === "/Token" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                                    location.pathname === "/Activity" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                                        location.pathname === "/FullScreenImage" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> : ""
            } */}

            <header className="pl-4 pr-4" className={headerbg ? "bg-black" : "bg-white"} >
                {/* <nav className="navbar navbar-light navbar-expand-lg" id="myNavbar" style={{
                    position: location.pathname === "/Profile" ? "relative" :
                        location.pathname === "/Buy" ? "relative" :
                            location.pathname === "/CreateCollectibleEdit" ? "relative" :
                                location.pathname === "/SignIn" ? "relative" :
                                    location.pathname === "/Token" ? "relative" :
                                        location.pathname === "/Activity" ? "relative" :
                                            location.pathname === "/FullScreenImage" ? "relative" : "absolute"
                }}> */}
                <nav className="navbar landing-header navbar-light navbar-expand-lg" id="myNavbar">
                    <div className="container-fluid menu-reverse container-fluid menu-reverse">


                        <div className="d-flex d-lg-none align-items-center">

                            <div className="d-lg-none d-sm-block mr-1">
                                <a className="nav-link nav-dark-button">
                                    <img src={searchLine} alt="" />
                                </a>
                            </div>

                            <div className="d-lg-none d-sm-block mr-1">
                                <a className="nav-link nav-dark-button" onClick={() => activeMode()}>
                                    <img src={vectorLogo} alt="" />
                                </a>
                            </div>

                            <div className="navbar-toggler p-0 mr-1" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <a className="nav-link nav-dark-button">
                                    <img src={menu4Line} className="navbar-hamburger-show" alt="" />
                                </a>
                            </div>

                            <div className="d-lg-none d-sm-block">
                                <a className="nav-link nav-dark-button p-0 nav-dark-button mr-2 position-relative">
                                    <svg onClick={() => setOpenProfileDropMenu(!openProfileDropMenu)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    {
                                        openProfileDropMenu === false ? "" : <div className="openProfileDropMenu">
                                            <h4>0×hubwc8fh2f....hb8fhr</h4>
                                            <div className="color-ping text-left">Set display name</div>

                                            <div className="border-section pt-3 mt-3">

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={userTick} width="36" />
                                                        </div>

                                                        <div className="ml-3">
                                                            <div><span className="color-gray">Starlight balance</span></div>
                                                            <div className="text-left">0 Starlight</div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button className="btn-dark-outline">Claim</button>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={grayPp} width="36" />
                                                        </div>

                                                        <div className="ml-3">
                                                            <div className="text-left"><span className="color-gray">Balance</span></div>
                                                            <div className="text-left">0 Starlight</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={grayPp} width="36" />
                                                        </div>

                                                        <div className="ml-3">
                                                            <div><span className="color-gray">Biding balance</span></div>
                                                            <div className="text-left">0 weTH</div>
                                                        </div>
                                                    </div>

                                                    <a className="nav-link nav-dark-button">
                                                        <svg width="20" height="20" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.02452 4.24267L6.96719 3.3L3.66719 0L0.367188 3.3L1.31052 4.24267L3.00052 2.552V11.3333H4.33385V2.552L6.02452 4.24267ZM10.3352 12.0001L13.6352 8.70008L12.6925 7.75741L11.0018 9.44808V0.666748H9.66849L9.66916 9.44808L7.97782 7.75741L7.03516 8.70008L10.3352 12.0001Z" fill="black" />
                                                        </svg>
                                                    </a>
                                                </div>

                                            </div>


                                            <div className="d-flex justify-content-between mb-3 mt-3">
                                                <Link to="/Profile"> <h6>My Profile</h6></Link>
                                            </div>

                                            <div className="d-flex justify-content-between mb-3">
                                                <Link to="/CreateCollectibleEdit"><h6>Edit Profile</h6></Link>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h6 className="m-0">Manage funds</h6>

                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" defaultChecked className="custom-control-input" id="profileSwitch3" />
                                                    <label className="custom-control-label" htmlFor="profileSwitch3"></label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between mb-3">
                                                <h6>Autoplay</h6>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <h6>Sign out</h6>
                                            </div>


                                        </div>
                                    }
                                </a>
                            </div>
                        </div>


                        <Link to="/" className="navbar-brand m-0 d-flex align-items-center"> <img src={fabaLogo} width="24" alt="" /> <h3 className="ml-2" style={{ fontSize: "22px", fontFamily: 'LoRes 9 Plus OT Narrow' }}>Starlight</h3></Link>

                        <div className="collapse navbar-collapse" id="mainNav">

                            <ul className="navbar-nav nav-fill align-items-center">

                                <li className="nav-item" onClick={() => props.setTab('ourVision')}>
                                    <Link to="ourVision" 
                                        smooth={true} 
                                        duration={500} 
                                        className="nav-link">
                                            Our Vision
                                    </Link>
                                </li>

                                <li className="nav-item " onClick={() => props.setTab('platform')}>
                                    <Link to="Platform" 
                                        smooth={true} 
                                        duration={500} 
                                        className="nav-link">
                                            Platform
                                    </Link>
                                </li>

                                <li className="nav-item " onClick={() => props.executeScroll}>
                                    <Link to="SLXToken" 
                                        smooth={true} 
                                        duration={500} 
                                        className="nav-link">
                                            SLX Token
                                    </Link>
                                </li>

                                <li className="nav-item " onClick={() => props.executeScroll}>
                                <Link to="Roadmap" 
                                        smooth={true} 
                                        duration={500} 
                                        className="nav-link">
                                            Roadmap
                                    </Link>
                                </li>

                                <li className="nav-item " onClick={() => props.executeScroll}>
                                <Link to="Community" 
                                        smooth={true} 
                                        duration={500} 
                                        className="nav-link">
                                            Community
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className="new-header-right-btn">
                            <ul className="d-flex">
                                <li className="nav-item d-sm-none d-lg-block p-0 d-flex align-items-center">
                                    <Link to="/CreateCollectible" className="nav-link p-0">
                                        <button className="btn btn-primary-outline">Whitepaper</button>
                                    </Link>
                                </li>

                                <li className="nav-item d-sm-none d-lg-block p-0 d-flex align-items-center">
                                    <Link to="/CreateCollectible" className="nav-link p-0">
                                        <button className="btn btn-fill">Buy SLX</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar
