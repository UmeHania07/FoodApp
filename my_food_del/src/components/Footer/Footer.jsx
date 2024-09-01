import React from 'react'
import './Footer.css'
import { assets } from '../../image/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id fuga unde, praesentium perferendis totam deserunt illo ratione itaque hic aliquam officiis quod dignissimos, officia saepe mollitia at cumque nemo.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">copyright  2024   &copy;  Tomato.com - All right Reserved. </p>
        </div>
    )
}

export default Footer
