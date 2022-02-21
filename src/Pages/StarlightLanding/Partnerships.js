import React, { useEffect, useState } from 'react'
import logo1 from '../../assets/img/partners/logo1.png';
import logo2 from '../../assets/img/partners/logo2.png';
import logo3 from '../../assets/img/partners/logo3.png';
import logo4 from '../../assets/img/partners/logo4.png';
import logo5 from '../../assets/img/partners/logo5.png';
import logo6 from '../../assets/img/partners/logo6.png';

const Partnerships = () => {
return (
    <div className="partnership-wrapper">
        <h3 className="sec-title">Key Partnerships</h3>
        <div className="partnership-container">
            <div className="partnership-img">
                <img src={logo1} />
            </div>
            <div className="partnership-img">
                <img src={logo2} />
            </div>
        </div>
        <div className="partnership-container">
            <div className="partnership-img">
                <img src={logo3} />
            </div>
            <div className="partnership-img">
                <img src={logo4} />
            </div>
            <div className="partnership-img">
                <img src={logo5} />
            </div>
            <div className="partnership-img">
                <img src={logo6} />
            </div>
        </div>
    </div>
    )
}
export default Partnerships




