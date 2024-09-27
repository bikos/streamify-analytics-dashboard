// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";

// export default function Header() {
//   return (
//     <header className="bg-slate-800 text-white p-4 ">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <FontAwesomeIcon icon={faMusic} className="h-6 w-6" />
//           <h1 className="text-2xl font-bold">Streamify Dashboard</h1>
//         </div>
//         {/* <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#" className="hover:text-slate-300">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-slate-300">
//                 Analytics
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-slate-300">
//                 Settings
//               </a>
//             </li>
//           </ul>
//         </nav> */}
//       </div>
//     </header>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 z-0 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Stremify <br /> Analytics!
      </motion.h1>
    </LampContainer>
  );
}
