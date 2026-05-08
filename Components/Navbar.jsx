// import React from 'react'
// import Image from 'next/image'
// import Logo from "@/public/gozen-logo.jpg"


// import { Button } from './ui/button'

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"



// function Navbar() {
//   return (
//     <>
//         <nav>

//             <div className='flex justify-evenly items-center bg-white shadow-2xl p-5 '>

//                     <div className='flex justify-baseline items-center'>

//                         <Image src={Logo} height={50} width={50} alt='gozen-logo'></Image>

//                         <span className='text-4xl font-bold'>GoZen</span>

//                     </div>


//                     {/* list  */}


//                     <div>

//                         <ul className='flex justify-evenly items-center gap-10'>


//                             <NavigationMenu>
//                                 <NavigationMenuList>
//                                     <NavigationMenuItem>
//                                     <NavigationMenuTrigger>Products</NavigationMenuTrigger>
//                                     <NavigationMenuContent >
//                                           <ul className="grid w-[200px] gap-1 md:w-[200px] md:grid-cols-2 lg:w-[400px]">
//                                         <NavigationMenuLink>Deep Agent</NavigationMenuLink>

//                                             <NavigationMenuLink>HyperSeek.ai</NavigationMenuLink>
//                                             <NavigationMenuLink>Forms</NavigationMenuLink>
//                                             <NavigationMenuLink>Optinly</NavigationMenuLink>
//                                             <NavigationMenuLink>Notify</NavigationMenuLink>
//                                             <NavigationMenuLink>Growth</NavigationMenuLink>

//                                             </ul>
//                                     </NavigationMenuContent>
//                                     </NavigationMenuItem>
//                                 </NavigationMenuList>
//                                 </NavigationMenu>
                        
//                         <li>Pricing</li>

//                         <li>Partners</li>



//                           <NavigationMenu>
//                                 <NavigationMenuList>
//                                     <NavigationMenuItem>
//                                     <NavigationMenuTrigger>Products</NavigationMenuTrigger>
//                                     <NavigationMenuContent >
//                                           <ul className="grid w-[200px] gap-1 md:w-[200px] md:grid-cols-2 lg:w-[400px]">
//                                         <NavigationMenuLink>Deep Agent</NavigationMenuLink>

//                                             <NavigationMenuLink>HyperSeek.ai</NavigationMenuLink>
//                                             <NavigationMenuLink>Forms</NavigationMenuLink>
//                                             <NavigationMenuLink>Optinly</NavigationMenuLink>
//                                             <NavigationMenuLink>Notify</NavigationMenuLink>
//                                             <NavigationMenuLink>Growth</NavigationMenuLink>

//                                             </ul>
//                                     </NavigationMenuContent>
//                                     </NavigationMenuItem>
//                                 </NavigationMenuList>
//                                 </NavigationMenu>



//                         </ul>
//                     </div>

//             <div>
                
//             </div>


//             <div className='flex justify-evenly items-center gap-5'>

//                     <Button className='bg-blue-400 px-6 py-3 font-bold text-white hover:bg-blue-950 '> Free Sign Up</Button>
//                     <Button className='bg-blue-950 font-bold text-white px-6 py-3' >Login</Button>

//             </div>



//             </div>

//         </nav>
//     </>
//   )
// }

// export default Navbar


// "use client";

// import React from "react";
// import Image from "next/image";
// import Logo from "@/public/gozen-logo.jpg";
// import { Button } from "./ui/button";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// const menuItems = [
//   {
//     name: "Products",
//     type: "dropdown",
//     items: [
//       "Deep Agent",
//       "HyperSeek.ai",
//       "Forms",
//       "Optinly",
//       "Notify",
//       "Growth",
//     ],
//   },
//   { name: "Pricing", type: "link" },
//   { name: "Partners", type: "link" },
// ];

// function Navbar() {
//   return (
//     <nav className="w-full bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-5">

//         {/* LEFT: Logo */}
//         <div className="flex items-center gap-2">
//           <Image src={Logo} height={40} width={40} alt="logo" />
//           <span className="text-2xl font-bold">GoZen</span>
//         </div>

//         {/* CENTER: Menu */}
//         <ul className="flex items-center gap-8">
//           {menuItems.map((item) => {
//             if (item.type === "dropdown") {
//               return (
//                 <NavigationMenu key={item.name}>
//                   <NavigationMenuList>
//                     <NavigationMenuItem>
//                       <NavigationMenuTrigger>
//                         {item.name}
//                       </NavigationMenuTrigger>

//                       <NavigationMenuContent>
//                         <ul className="grid w-[300px] grid-cols-2 gap-2 p-4">
//                           {item.items.map((subItem) => (
//                             <NavigationMenuLink key={subItem}>
//                               {subItem}
//                             </NavigationMenuLink>
//                           ))}
//                         </ul>
//                       </NavigationMenuContent>

//                     </NavigationMenuItem>
//                   </NavigationMenuList>
//                 </NavigationMenu>
//               );
//             }

//             return (
//               <li key={item.name} className="cursor-pointer font-medium">
//                 {item.name}
//               </li>
//             );
//           })}
//         </ul>

//         {/* RIGHT: Buttons */}
//         <div className="flex items-center gap-4">
//           <Button className="bg-blue-400 px-5 py-2 font-semibold text-white hover:bg-blue-900">
//             Free Sign Up
//           </Button>
//           <Button className="bg-blue-900 px-5 py-2 font-semibold text-white">
//             Login
//           </Button>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { useState } from "react";
// import Logo1 from "@/public/logo1.webp"

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="w-full shadow-sm border-b border-gray-200">
//       {/* Top Banner */}
//       <div className="bg-green-500 text-white text-xs sm:text-sm md:text-base font-medium">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">
//           <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
//             📈
//           </div>

//           <p>
//             Launching Inbound 360 | The tool behind our journey to 523 demos
//             and a $1.5M pipeline.
//           </p>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="bg-[#f4f4f4] relative z-50"  data-aos="fade-down">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[82px] flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative w-11 h-11 sm:w-12 sm:h-12">
//               <div className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-tl-2xl rounded-br-2xl"></div>
//               <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-md"></div>
//               <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-md"></div>
//               <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#0c234a] rounded-tl-2xl rounded-br-2xl"></div>
//             </div>

//             <h1 className="text-3xl sm:text-4xl font-bold text-[#0c234a] tracking-tight">
//               GoZen
//             </h1>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-14">
//             <button className="flex items-center gap-1 text-lg font-medium text-[#0c234a] hover:text-blue-600 transition">
//               Products
//               <ChevronDown size={18} />
//             </button>

//             <Link
//               href="#"
//               className="text-lg font-medium text-[#0c234a] hover:text-blue-600 transition"
//             >
//               Pricing
//             </Link>

//             <Link
//               href="#"
//               className="text-lg font-medium text-[#0c234a] hover:text-blue-600 transition"
//             >
//               Partners
//             </Link>

//             <button className="flex items-center gap-1 text-lg font-medium text-[#0c234a] hover:text-blue-600 transition">
//               Resources
//               <ChevronDown size={18} />
//             </button>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-7 py-3 rounded-2xl transition duration-300 shadow-md">
//               Free Sign up
//             </button>

//             <button className="bg-[#0c234a] hover:bg-[#08172f] text-white text-lg font-semibold px-7 py-3 rounded-2xl transition duration-300 shadow-md">
//               Login
//             </button>

//             {/* Language */}
//             <div className="flex items-center gap-2 text-gray-700">
//               <div className="w-7 h-7 rounded-full overflow-hidden border">
//                 <Image
//                   src={Logo1}
//                   alt="English"
//                   width={28}
//                   height={28}
//                   className="object-cover"
//                 />
//               </div>

//               <span className="text-lg font-medium">EN</span>
//             </div>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden text-[#0c234a]"
//           >
//             {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             mobileMenuOpen
//               ? "max-h-[500px] opacity-100"
//               : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-200 flex flex-col gap-5">
//             <button className="flex items-center justify-between text-base font-medium text-[#0c234a]">
//               Products
//               <ChevronDown size={18} />
//             </button>

//             <Link
//               href="#"
//               className="text-base font-medium text-[#0c234a]"
//             >
//               Pricing
//             </Link>

//             <Link
//               href="#"
//               className="text-base font-medium text-[#0c234a]"
//             >
//               Partners
//             </Link>

//             <button className="flex items-center justify-between text-base font-medium text-[#0c234a]">
//               Resources
//               <ChevronDown size={18} />
//             </button>

//             {/* Mobile Buttons */}
//             <div className="flex flex-col gap-3 pt-3">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-5 py-3 rounded-xl transition">
//                 Free Sign up
//               </button>

//               <button className="bg-[#0c234a] hover:bg-[#08172f] text-white text-base font-semibold px-5 py-3 rounded-xl transition">
//                 Login
//               </button>
//             </div>

//             {/* Language */}
//             <div className="flex items-center gap-2 pt-2">
//               <div className="w-6 h-6 rounded-full overflow-hidden border">
//                 <Image
//                   src={Logo1}
//                   alt="English"
//                   width={24}
//                   height={24}
//                 />
//               </div>

//               <span className="text-sm font-medium text-gray-700">
//                 EN
//               </span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import Logo1 from "@/public/logo1.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 shadow-sm">

      {/* Top Banner */}
      <div className="bg-green-500 text-white text-xs sm:text-sm md:text-base font-medium">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center">

          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            📈
          </div>

          <p>
            Launching Inbound 360 | The tool behind our journey
            to 523 demos and a $1.5M pipeline.
          </p>

        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#f4f4f4] sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[82px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <div className="relative w-11 h-11 sm:w-12 sm:h-12">

              <div className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-tl-2xl rounded-br-2xl"></div>

              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-md"></div>

              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-md"></div>

              <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#0c234a] rounded-tl-2xl rounded-br-2xl"></div>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#0c234a] tracking-tight">
              GoZen
            </h1>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-14">

            <button className="flex items-center gap-1 text-lg font-medium text-[#0c234a] hover:text-blue-600 transition">
              Products
              <ChevronDown size={18} />
            </button>

            <Link
              href="#"
              className="text-lg font-medium text-[#0c234a] hover:text-blue-600 transition"
            >
              Pricing
            </Link>

            <Link
              href="#"
              className="text-lg font-medium text-[#0c234a] hover:text-blue-600 transition"
            >
              Partners
            </Link>

            <button className="flex items-center gap-1 text-lg font-medium text-[#0c234a] hover:text-blue-600 transition">
              Resources
              <ChevronDown size={18} />
            </button>

          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-7 py-3 rounded-2xl transition duration-300 shadow-md">
              Free Sign up
            </button>

            <button className="bg-[#0c234a] hover:bg-[#08172f] text-white text-lg font-semibold px-7 py-3 rounded-2xl transition duration-300 shadow-md">
              Login
            </button>

            {/* Language */}
            <div className="flex items-center gap-2 text-gray-700">

              <div className="w-7 h-7 rounded-full overflow-hidden border">
                <Image
                  src={Logo1}
                  alt="English"
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>

              <span className="text-lg font-medium">
                EN
              </span>

            </div>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#0c234a]"
          >
            {
              mobileMenuOpen
                ? <X size={32} />
                : <Menu size={32} />
            }
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-[82px] left-0 w-full bg-white z-[999] shadow-lg transition-all duration-300 overflow-hidden ${
            mobileMenuOpen
              ? "max-h-screen opacity-100 py-6"
              : "max-h-0 opacity-0 py-0"
          }`}
        >

          <div className="flex flex-col gap-5 px-6">

            <button className="flex items-center justify-between text-base font-medium text-[#0c234a]">
              Products
              <ChevronDown size={18} />
            </button>

            <Link
              href="#"
              className="text-base font-medium text-[#0c234a]"
            >
              Pricing
            </Link>

            <Link
              href="#"
              className="text-base font-medium text-[#0c234a]"
            >
              Partners
            </Link>

            <button className="flex items-center justify-between text-base font-medium text-[#0c234a]">
              Resources
              <ChevronDown size={18} />
            </button>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-4">

              <button className="bg-blue-600 text-white text-base font-semibold px-5 py-3 rounded-xl">
                Free Sign up
              </button>

              <button className="bg-[#0c234a] text-white text-base font-semibold px-5 py-3 rounded-xl">
                Login
              </button>

            </div>

            {/* Language */}
            <div className="flex items-center gap-2 pt-2">

              <div className="w-6 h-6 rounded-full overflow-hidden border">
                <Image
                  src={Logo1}
                  alt="English"
                  width={24}
                  height={24}
                />
              </div>

              <span className="text-sm font-medium text-gray-700">
                EN
              </span>

            </div>

          </div>

        </div>

      </nav>

    </header>
  );
}