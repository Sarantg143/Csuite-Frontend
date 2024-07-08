import React, { useEffect } from 'react';

//style.css
import './Footer.css'

//fontawesome icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookF, faSquareInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons' 

//image upload
import footerlogo from '../Header/Asset/brand-footer.png'

//Aos animations
import Aos from "aos"
import 'aos/dist/aos.css'

function Footer() {

  //aos fetch 
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='footer' id='footer'>
      <section data-aos="fade-up" className='section1'>
        <img src={footerlogo} alt="Footer Logo" width={"120px"} />
        <p>Practical-based learning platform to enhance skills</p>
        <h6>Follow Us on</h6>
        <div className='sociallinks'>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faSquareInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
        </div>
      </section>
      <section data-aos="fade-up" className='section2'>
        <h5>About LMS</h5>
        <a href="#pricing">Pricing</a>
        <a href="#features">Features</a>
        <a href="#integrations">Integrations</a>
        <a href="#events">Events</a>
        <a href="#reviews">Reviews</a>
      </section>
      <section data-aos="fade-up" className='section3'>
        <h5>Support</h5>
        <a href="#contact">Contact Us</a>
        <a href="#helpdesk">Help Desk</a>
        <a href="#support">Customer Support</a>
        <a href="#services">Professional Services</a>
      </section>
      <section data-aos="fade-up" className='section4'>
        <h4>Become an Instructor</h4>
        <p>We only work with the best companies around the globe</p>
        <form className='instructoremail'>
          <input className="emailinput" type="email" placeholder='Enter Your Email' />
          <input className='registernow' type="submit" value="Register Now" />
        </form>
      </section>
    </div>
  )
}

export default Footer
