import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user-icon" />
            </div>
            <div className='main-container'>
                <div className="greet">
                    <p><span>Hello , Alok.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places in Japan</p>
                        <img src={assets.compass_icon} alt="compass-icon" />
                    </div>
                    <div className="card">
                        <p>Briefly Summarize the concept : urban planning</p>
                        <img src={assets.bulb_icon} alt="bulb-icon" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="message-icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of following code</p>
                        <img src={assets.code_icon} alt="code-icon" />
                    </div>
                </div>
                <div className='main-bottom'>
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery_icon" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                        
                    </div>
                    <p className='bottom-info'>
                            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main