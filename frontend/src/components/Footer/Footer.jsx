import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
    <div className='footer-content-left'>
<img className='fe-logo'  src={assets.logo} alt="" />
<p>Lorem Ipsum is just dummy text used in the printing and typesetting industries. Since the 1500s, when an unknown printer scrambled a galley of type to make a type specimen book, Lorem Ipsum has been the industry's standard dummy text. It has not only survived five centuries, but also the transition to electronic typesetting, remaining largely unchanged.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
        </div>
    <div className='footer-content-right'>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+1-221-245-6467</li>
    <li>contact@FoodieExpress.com</li>
</ul>
    </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ FoodieExpress.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
