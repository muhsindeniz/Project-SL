import React, { useEffect, useState } from 'react'
import MsgBig from '../../assets/img/icons/custom/msgbig.png';
import Discord from '../../assets/img/icons/custom/Discord.svg';
import TwitterIcon from '../../assets/img/icons/custom/Twitter.svg';
import TelegramIcon from '../../assets/img/icons/custom/Telegram.svg';
import RedditIcon from '../../assets/img/icons/custom/Reddit.svg';


const StayUpdateSec = () => {
return (
    <section className="common-gapping stay-update-sec">
        <div className="container">
            <div className="stay-update-inner">
                <div className="stay-update-msg">
                    <span className="msg-icon">
                        <img src={MsgBig}/>
                        <span>3</span>
                    </span>
                    <h3>Stay updated with the lastest news</h3>
                    <p>Stay up to date with updates and <br/> be at the cutting edge of the universe.</p>
                </div>
                <div className="join-our-socials">
                    <h3>Join our socials:</h3>
                    <ul>
                        <li>
                            <a href="https://discord.com/channels/910446505733812254/910446506350362637" target="_blank">
                                <img src={Discord} />
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/starlight_meta" target="_blank">
                                <img src={TwitterIcon} />
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/starlightmeta" target="_blank">
                                <img src={TelegramIcon} />
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.reddit.com/r/starlightmeta/" target="_blank">
                                <img src={RedditIcon} />
                                Reddit
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
export default StayUpdateSec