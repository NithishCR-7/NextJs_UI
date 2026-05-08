// import React from 'react'

// function Footer() {
//   return (
//     <>
//         <main >


//                 <div className='flex justify-center items-center'>
//                     <div>
//                         <p>Gozen</p>
//                     </div>

//                     <div>

//                         <p>Products</p>
//                         <ul>
//                             <li>GoZen DeepAgent</li>
//                             <li>Gozen Growth</li>
//                             <li>GoZen HyperReach</li>
//                             <li>GoZen Forms</li>
//                             <li>GoZen Testimonials</li>
//                             <li>GoZen Optinly</li>
//                             <li>GoZen Content.ai</li>
//                             <li>Gozen Engage</li>
//                             <li>Gozen Notify</li>
//                             <li>GoZen Inbound 360</li>
//                         </ul>
//                     </div>

//                     <div>

//                         <p>Quick Links</p>

//                         <ul>
//                         <li>About</li>
//                         <li>Product Features Updates</li>
//                         <li>Partner Program</li>
//                         <li>Referral Program</li>
//                         <li>Terms and Conditions</li>
//                         <li>Privacy Policy</li>

//                         </ul>
                        

//                     </div>
//                 </div>
//         </main>
//     </>
//   )
// }

// export default Footer


"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";

import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[#00153a] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo + Social */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute top-0 left-0 w-5 h-5 bg-white rounded-tl-2xl rounded-br-2xl"></div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-md"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-white rounded-md"></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-white rounded-tl-2xl rounded-br-2xl"></div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight">
                GoZen
              </h1>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-10">
              <Link
                href="#"
                className="bg-white/80 hover:bg-blue-500 hover:text-white transition w-10 h-10 rounded flex items-center justify-center text-[#00153a]"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="bg-white/80 hover:bg-pink-500 hover:text-white transition w-10 h-10 rounded flex items-center justify-center text-[#00153a]"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="bg-white/80 hover:bg-sky-500 hover:text-white transition w-10 h-10 rounded flex items-center justify-center text-[#00153a]"
              >
                <FaTwitter size={18} />
              </Link>

              <Link
                href="#"
                className="bg-white/80 hover:bg-blue-700 hover:text-white transition w-10 h-10 rounded flex items-center justify-center text-[#00153a]"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="#"
                className="bg-white/80 hover:bg-orange-500 hover:text-white transition w-10 h-10 rounded flex items-center justify-center text-[#00153a]"
              >
                <FaRedditAlien size={18} />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-2xl font-semibold mb-7">
              Our Products
            </h2>

            <ul className="space-y-5 text-gray-300">
              {[
                "GoZen DeepAgent",
                "GoZen Growth",
                "GoZen HyperReach",
                "GoZen Forms",
                "GoZen Testimonials",
                "GoZen Optinly",
                "GoZen Content.Ai",
                "GoZen Engage",
                "GoZen Notify",
                "GoZen Inbound 360",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-white transition text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-7">
              Quick Links
            </h2>

            <ul className="space-y-5 text-gray-300">
              {[
                "About Us",
                "Products Feature Updates",
                "Partner Program",
                "Referral Program",
                "Terms And conditions",
                "Privacy Policy",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-white transition text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scroll Top Button */}
          <div className="flex lg:justify-end items-start">
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="bg-blue-600 hover:bg-blue-700 transition w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
            >
              <IoIosArrowUp size={28} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-400 text-base">
            <p>Copyright © 2026 gozen.io</p>

            <p className="text-center">
              Made With Love 💖💛 in Coimbatore & New Jersey
            </p>

            <p>Contact: (551)-277-0046 | team@gozen.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
}