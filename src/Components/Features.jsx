import { motion } from "framer-motion";
import React, { useState } from "react";

const Features = () => {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20 bg-zinc-900">
      {/* Section Title */}
      <div className="w-full px-16 text-white text-7xl border-b-2 border-zinc-700 pb-10">
        <h1 className="font-['Neue_Montreal'] tracking-tighter">Featured Projects</h1>
      </div>

      {/* Cards Section */}
      <div className="px-10 pt-10">
        <div className="cards w-full flex gap-10 mt-10">
          {/* First Card */}
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardContainer w-1/2 h-[75vh] relative"
          >
            <motion.h1
              className="absolute overflow-hidden flex text-[#CDEA68] font-semibold tefxt-6xl z-[9] p-4 font-['Founders_Grotesk_X-Condensed'] tracking-tighter  right-0 translate-x-6 top-1/2 -translate-y-1/2"
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease:[0.22,1,0.36,1],
                    delay: index * 0.6,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </motion.h1>
            <div className="scale-100 w-full rounded-xl h-full overflow-hidden bg-zinc-950">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Illustration of a crypto project"
              />
            </div>
          </div>

          {/* Second Card */}
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardContainer w-1/2 h-[75vh] relative"
          >
            <motion.h1
              className="absolute flex overflow-hidden text-[#CDEA68] font-semibold text-6xl z-[9] p-4 font-['Founders_Grotesk_X-Condensed'] tracking-tighter left-0 translate-x-6 top-1/2 -translate-y-1/2"
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={isHovering ? { y: "0" } : { y: "100%" }}
                transition={{
                  
                  ease:[0.22,1,0.36,1],
                  delay: index * 0.6,
                }}
                className="inline-block"
              >
                {item}
              </motion.span>
              ))}
            </motion.h1>
            <div className="scale-100 w-full rounded-xl h-full overflow-hidden bg-zinc-950">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt="Design of a frame project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;


