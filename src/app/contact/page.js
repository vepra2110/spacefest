import './contact.css'

import { FaLocationDot, FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";

export default function Home() {
  return (
    <div className="contact-container">
      {/* <label className='contact-title'>Contact Us</label> */}
      <div className="contact-box box">

        <label style={{
          fontSize: '30px',
          textAlign: 'center'
        }}>Contact Us!</label>

        <p className="text">Have a query? Feel free to reach out to us.</p>

        <span style={{
          marginTop: '25px'
        }}><FaLocationDot /> Kalpana Chawla Space Technology Cell, IIT Kharagpur</span>

        <span className='contact-information'><IoCall /> +91 62004 29087</span>

        <span className='contact-information'>spats.co.in</span>

        <span className='contact-information'><IoMail /> spats.iitkgp@gmail.com</span>

        
        <div className="socials-container" style={{
          marginTop: '20px'
        }}>
          <FaSquareFacebook className='social-logo'/>
          <FaSquareInstagram className='social-logo'/>
          <FaLinkedin className='social-logo'/>
          <FaYoutube className='social-logo'/>
        </div>

      </div>

      
      <div className="query-box box">

        <label style={{
          fontSize: '30px',
          textAlign: 'center'
        }}>Send Query!</label>

        <input type="text" name="" className='input' placeholder='Name' />
        <input type="text" name="" className='input' placeholder='Email Address' />
        <input type="text" name="" className='input' placeholder='Phone Number' />
        <input type="text" name="" className='input query-description' placeholder='Describe query here' />

        <button className="submit">Submit</button>


      </div>
    </div>
  );
}
