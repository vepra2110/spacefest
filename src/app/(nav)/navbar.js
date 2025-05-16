import Link from 'next/link'
import { IoMdPlanet } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import './navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">

      <Link href='/'>
        <span className='title-container'>
          <IoMdPlanet className='logo'/>
          <span className='navbar-title'>SPACE FEST</span>
        </span>
      </Link>

      <div className="navbar-links">
        <Link href='/' className='link'>
          Home
        </Link>
        <Link href='/schedule' className='link'>
          Schedule
        </Link>
        <Link href='/guestlecture' className='link'>
          Guest Lecture
        </Link>
        <Link href='/team' className='link'>
          Team
        </Link>
        <Link href='/gallery' className='link'>
          Gallery
        </Link>
        <Link href='/contact' className='link'>
          Contact
        </Link>
      </div>

      <button className='user-logo-button'>
        <FaRegUser className='user-logo'/>
      </button>

    </nav>
  );
}