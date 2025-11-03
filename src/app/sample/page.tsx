"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TwoLayerScroll() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: [ "start start", "end end" ],
    });

    const charX1 = useTransform(scrollYProgress, [0.1, 0.4], ["-50vw", "0vw"]);
    const charX2 = useTransform(scrollYProgress, [0.1, 0.4], ["-50vw", "0vw"]);
    const charOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] w-full">

      {/* LOWER IMAGE — scrolls behind */}
      <div className="top-0 left-0 z-10 w-full h-[200vh]">
        <img
          src="/sky.png"
          alt="Lower Layer"
          className=""
        />
      </div>

      {/* UPPER IMAGE — stays pinned while scrolling */}
      <div className="fixed bottom-0 z-20 w-full overflow-hidden">
        <img
          src="/ground.png"
          alt="Upper Layer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Person 1 */}
      <div>
        <motion.img
            src="/p1.png"
            alt="Person 1"
            style={{ opacity: charOpacity, x: charX1 }}
            animate= {{ y: [0, -20, 0] }}
            transition={{y: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}}
            className="fixed bottom-[6vh] left-[6vw] w-[24vw] max-w-[320px] z-30"
        />
      </div>

      {/* Person 2 */}
      <div>
        <motion.img 
            src="/p2.png"
            alt="Person 2"
            style={{ opacity: charOpacity, x: charX2 }}
            animate= {{ y: [0, -20, 0] }}
            transition={{y: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}}
            className="fixed bottom-[6vh] left-[60vw] w-[24vw] max-w-[320px] z-30 transform scale-x-[-1]"
        />
      </div>

    </section>
  );
}


// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function FadeInOnScroll() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"], // Track scrolling across this section
//   });

//   // Fade image from 0 → 1 opacity as user scrolls through the section
//   const charX1 = useTransform(scrollYProgress, [0.5, 0.8], ["-50vw", "0vw"]);
//   const charX2 = useTransform(scrollYProgress, [0.1, 0.4], ["-50vw", "0vw"]);
//   const charOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

//   return (
//     <section ref={sectionRef} className="relative h-[200vh] w-full bg-black">
      
//       {/* STICKY VIEWPORT */}
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center">
//         <motion.img
//           src="/p1.png"
//           alt="Fade In Image"
//           style={{ opacity: charOpacity, x: charX1 }}
//           className="w-[60vw] max-w-[600px]"
//         />
//         <motion.img
//           src="/p2.png"
//           alt="Fade In Image"
//           style={{ opacity: charOpacity, x: charX1 }}
//           className="w-[60vw] max-w-[600px] transform scale-x-[-1]"
//         />
//       </div>

//     </section>
//   );
// }
