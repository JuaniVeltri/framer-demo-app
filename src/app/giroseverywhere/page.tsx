"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InViewExample() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const [yValue, setYValue] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((value) => setYValue(value));
  }, [scrollYProgress]);

  const rotate = useTransform(scrollYProgress, [0, 0.3, 0.4], [0, -180, 230]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 2, 0.5]);
  const x = useTransform(scrollYProgress, [0, 1], [-500, 1000]);
  const y = useTransform(scrollYProgress, [0, 1], [-200, 1000]);

  return (
    <div className="h-[300vh]">
      <h1 className="text-xl fixed">scroll: {yValue}</h1>
      <div className="w-full flex items-center justify-center">
        <div className="fixed top-[200px]">
          <motion.div
            ref={ref}
            initial={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ x, y, scale, rotate }}
          >
            <Image src="/tiger.png" alt="framer" width={300} height={500} />
          </motion.div>
        </div>
        <div className="fixed right-80 bottom-0">
          <Image src="/pool.png" alt="pool" width={300} height={500} />
        </div>
      </div>
    </div>
  );
}
