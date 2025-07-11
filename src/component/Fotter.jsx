import React from 'react'
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";

const Fotter = () => {
  return (
    <div>
      <div className="pt-10 md:grid grid-cols-2 md:p-10 p-5 border-t pb-5 shadow-b">
        <section className="md:pl-22">
          <div className="flex items-center">
            <img
              src="https://www.globalshipwave.com/img/Asset%201.png"
              alt=""
              className="w-20 "
            />
            <div className="md:block hidden">
              <p className="font-extrabold ml-2">Cyber Security</p>
              <p className="text-xs font-extrabold ml-2">100% Secured</p>
            </div>
          </div>

          <ul className="md:mt-7 mt-3 flex gap-5 text-sm font-medium ">
            <li className="hover:underline">Privacy</li>
            <li className="hover:underline">Trust Center</li>
            <li className="hover:underline">Terms of Use</li>
            <li className="hover:underline">Documents</li>
          </ul>
          <p className="mt-5 md:block hidden text-sm font-medium ">
            Copyright © 2025 Palo Alto Networks. All Rights Reserved
          </p>
        </section>
        <section className="md:pl-22 md:p-10 mt-3 md:mt-0">
          <p className="font-extrabold md:ml-2">Support</p>
          <ul className="flex md:mt-5 mt-2 gap-5 items-center">
            <li className="border-2 p-2 rounded-lg">
              <FaTelegramPlane className="text-2xl" />
            </li>
            <li className="border-2 p-2 rounded-lg">
              <FaTiktok className="text-xl" />
            </li>
            <li className="border-2 p-2 rounded-lg">
              <FaInstagram className="text-lg" />
            </li>
          </ul>
        </section>
        <p className="mt-5 md:hidden block md:text-sm text-xs font-medium ">
          Copyright © 2025 Palo Alto Networks. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Fotter