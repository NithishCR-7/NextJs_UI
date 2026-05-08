// "use client";

// import { motion } from "framer-motion";

// const products = [
//   {
//     title: "Optinly",
//     desc: "Create high-converting popups and forms",
//     icon: "🧲",
//   },
//   {
//     title: "Content AI",
//     desc: "Generate blogs, ads, and marketing copy",
//     icon: "✍️",
//   },
//   {
//     title: "Notify",
//     desc: "Send push notifications to users instantly",
//     icon: "🔔",
//   },
//   {
//     title: "Form Builder",
//     desc: "Build smart forms and collect leads",
//     icon: "📄",
//   },
//   {
//     title: "Email Automation",
//     desc: "Automate campaigns and workflows",
//     icon: "📧",
//   },
//   {
//     title: "Chatbot",
//     desc: "AI chatbot for customer engagement",
//     icon: "🤖",
//   },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function ProductSection() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold mb-4">
//             Our Products
//           </h2>
//           <p className="text-gray-500">
//             Powerful tools to grow your business
//           </p>
//         </div>

//         {/* Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {products.map((product, i) => (
//             <motion.div
//               key={i}
//               variants={item}
//               className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-md 
//               transition duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer overflow-hidden"
//             >
//               {/* Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

//               {/* Content */}
//               <div className="relative z-10">
                
//                 {/* Icon */}
//                 <div className="text-4xl mb-4 transition transform group-hover:scale-110">
//                   {product.icon}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold mb-2">
//                   {product.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-500 text-sm">
//                   {product.desc}
//                 </p>
//               </div>

//               {/* Border Glow */}
//               <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-400 transition duration-300"></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );


// }


// import React, { useState } from 'react'
// import { Button } from './ui/button';
// function FilterCards() {

//         const [filter,SetFilter] = useState("all");
//   return (
//     <>

//       <main>


//                 <div>



//                 </div>

//       </main>

       
    
//     </>
//   )
// }

// export default FilterCards



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  marketing: [
    {
      title: "GoZen Optinly",
      desc: "Engage your audience with strategic popups personalized for your use case.",
      icon: "📢",
    },
    {
      title: "GoZen Forms",
      desc: "AI-powered no-code form builder for feedback, polls, and surveys.",
      icon: "📝",
    },
    {
      title: "GoZen Engage",
      desc: "Gamified lead generation platform for eCommerce.",
      icon: "🎯",
    },
  ],
  sales: [
    {
      title: "Email Automation",
      desc: "Automate sales emails and follow-ups.",
      icon: "📧",
    },
    {
      title: "Lead Manager",
      desc: "Track and manage leads efficiently.",
      icon: "📊",
    },
    {
      title: "CRM Sync",
      desc: "Sync your leads with CRM tools.",
      icon: "🔄",
    },
  ],
  support: [
    {
      title: "AI Chatbot",
      desc: "Automate customer conversations.",
      icon: "🤖",
    },
    {
      title: "Helpdesk",
      desc: "Manage tickets and support queries.",
      icon: "🎧",
    },
    {
      title: "Knowledge Base",
      desc: "Create help articles for users.",
      icon: "📚",
    },
  ],
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("marketing");

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Our <span className="text-blue-600">Products</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-1 shadow-md">
            {["marketing", "sales", "support"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full capitalize transition ${
                  activeTab === tab
                    ? "bg-blue-900 text-white"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {data[activeTab].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="text-3xl mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {item.desc}
                </p>

                {/* CTA */}
                <button className="text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}