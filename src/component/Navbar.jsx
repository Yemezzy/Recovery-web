import React,{useState} from 'react'
import { FaBars, FaTelegramPlane } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <p className="text-center p-5 bg-[#140641] text-white font-semibold text-sm">
          Fal.Con 2025: Leading cybersecurity into the AI era
        </p>
        <div className="px-10 py-5  flex justify-between items-center">
          <img
            src="https://www.globalshipwave.com/img/Asset%201.png"
            alt=""
            className="w-15"
          />
          <ul className="md:flex gap-10 font-semibold hidden">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact</li>
            </Link>
          </ul>
          <button className="border-[#140641] md:block hidden border-2 px-3 py-2 rounded-lg">
            Get started
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-[#140641] md:hidden block border-2 px-3 py-2 rounded-lg"
          >
            <FaBars />
          </button>
        </div>
        {isOpen && (
          <ul className="mt-4 w-[100%] border-white border-2 text-white bg-[#140641] font-medium md:hidden">
            <Link to="/">
              <li className="block hover:bg-blue-500 border-b-2 border-white p-2 py-3 ">
                Home
              </li>
            </Link>

            <Link to="/services">
              <li className="block border-b-2 border-white p-2 py-3 ">
                Services
              </li>
            </Link>
            <Link to="/about-us">
              <li className="block border-b-2 border-white p-2 py-3 ">About</li>
            </Link>

            <Link to="/contact-us">
              <li className="block  p-2 py-3 ">Contact</li>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar