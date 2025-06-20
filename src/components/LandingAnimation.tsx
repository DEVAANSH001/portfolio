// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function LandingAnimation() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000); // Total duration of animation

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="fixed inset-0 flex items-center justify-center bg-background z-[9999]"
//         >
//           <div className="flex flex-col items-center">
//             <motion.h1
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.25,
//                   },
//                 },
//               }}
//               className="text-5xl font-bold mb-4 flex gap-2"
//             >
//               {/* D */}
//               <motion.span
//                 initial={{ color: "#ffffff", scale: 0 }}
//                 animate={{ color: "#ffffff", scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-5xl"
//               >
//                 Devaansh.
//               </motion.span>
// {/* 
//               Remaining text
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent"
//               >
//                 evaansh.
//               </motion.span> */}
//             </motion.h1>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
