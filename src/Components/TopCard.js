import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function TopCard ({title,Price,topuserimg, topcoverimg}) {
  return (
      <div className="topSellerCard">

        <div className="w-100 topSellerCardImageover">
            <img className="seller-banner-image" src={topcoverimg} width="240" alt="" />
        </div>

        <div className="topSellectProfilePicture">
            <img src={topuserimg} width="100%" alt="" />
            <div className="confirmation">
                <i className="fas fa-check"></i>
            </div>
        </div>
        <div className="topSellerUserInfo">
            <h5><b>{title}</b></h5>
            <small>{Price}</small>
        </div>
      </div>
  );
}


