import React, { useEffect, useState } from 'react'
import starlBanner from '../../assets/img/custom/starlBanner.png'

const StarlBanner = () => {
return (
    <section className="starl-banner-sec">
        <div className="starl-banner-inner">
            <div className="starl-banner-img">
                <img src={starlBanner} />
            </div>
            <div className="starl-banner-info">
                <h1>Starlight <sub>(SLX)</sub></h1>
                <p>An ever-expanding universe of creativity built on the Solana blockchain.</p>
            </div>
        </div>
    </section>
    )
}
export default StarlBanner