'use client';

import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <div className="h-screen"></div> */}
    </div>
  );
}


const Hero = () => {

  const { scrollY, scrollYProgress } = useScroll();

  const VIEW_HEIGHT = typeof window !== "undefined" ? window.innerHeight * 3 : 800;
  console.log(VIEW_HEIGHT);
  

  const mod_scroll = useTransform(scrollY, [0, VIEW_HEIGHT], [0, 1]);
  const opacity = useTransform(scrollY, [0, VIEW_HEIGHT], [0, 1]);


  const y1 = useTransform(scrollYProgress, [0.7, 1], [300, 0]);

  const y2 = useTransform(scrollYProgress, [0.85, 1], [500, 0]);
  const y3 = useTransform(scrollYProgress, [0.85, 1], [300, 0]);

  const y4 = useTransform(scrollYProgress, [0.4, 1], [0, 120]);

  const pos1 = useMotionTemplate`translateY(${y1}px)`;
  const pos2 = useMotionTemplate`translateY(${y2}px)`;
  const pos3 = useMotionTemplate`translateY(${y3}px)`;
  const pos4 = useMotionTemplate`translateY(-${y4}vh)`;

  return (

    // slide container
    <div className="w-full">

      {/* scene viewport*/}
      <div
        className="absolute sticky top-0 min-h-screen overflow-hidden"
      >

        <motion.div
          className="absolute "
          style={{
            width: "100%",
            height: "200%",
            transform: pos4,
          }}
        >
          <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/Sky.png" />
        </motion.div>



        {/* ground */}
        <motion.div
          className="absolute top-65"
          style={{
            width: "100%",
            height: "80%",
            transform: pos1,
          }}
        >
          <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/ground.png" />
        </motion.div>

        {/* person1 */}
        <motion.div
          className="absolute bottom-5 "
          style={{

            width: "30vw",
            height: "30vh",
            transform: pos2,
          }}
        >
          <motion.img
            animate={{
              x: [0, 40, 0], // Move from 0 to 150 and back to 0
              scale: 1,
            }}
            transition={{
              duration: 8,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Loop continuously
            }}
            initial={{
              x: 40,
            }}

            style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/p1.png" />
        </motion.div>

        {/* person2 */}
        <motion.div
          className="absolute bottom-10 right-40 "
          style={{
            width: "30vw",
            height: "30vh",
            transform: pos3,
          }}
        >
          <motion.img
          animate={{
              x: [0, 20, 0], // Move from 0 to 150 and back to 0
              scale: 1,
            }}
            transition={{
              duration: 4,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Loop continuously
            }}
            initial={{
              x: 0,
            }}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/p2.png" />
        </motion.div>


        {/* <motion.div>
          <div className="absolute w-full bg-orange-800 h-[10vh]">
          </div>
        </motion.div> */}

        {/* <motion.div className="absolute bottom-0 left-0 w-full h-[20vh] bg-orange-600"

          style={{ transform: pos1 }}
        >

        </motion.div> */}
        {/* <motion.div className="absolute bottom-0 left-0 w-full h-[15vh] bg-green-200"

          style={{ transform: pos2 }}
        >

        </motion.div> */}
      </div>
    </div >


  );
}

