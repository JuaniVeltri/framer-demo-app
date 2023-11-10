"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function InViewExample() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="h-full">
      <h1 className="text-xl fixed">isInView: {isInView ? "true" : "false"}</h1>
      <div className="w-full h-[300vh] flex items-center justify-center">
        <motion.div
          ref={ref}
          animate={{
            opacity: isInView ? 1 : 0.1,
            rotate: isInView ? [0, 180, 0, 360] : 0,
            x: isInView ? [0, 500, -500, 0] : 0,
            scale: isInView ? [1, 2, 0.2, 1] : 1,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.1, 0.9, 1],
          }}
        >
          <Image src="/argusto.png" alt="framer" width={300} height={500} />
        </motion.div>
      </div>
    </div>
  );
}
