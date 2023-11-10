"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function CubicBezierExample() {
  const { scrollY } = useScroll(); // { offset: ['0px', `5100px`] }
  const [yValue, setYValue] = useState(0);
  const scale = useTransform(scrollY, [0, 200, 400, 600], [1, 2, 0.5, 3]);
  const x = useTransform(scrollY, [0, 200, 400, 600], [100, 200, 0.5, -300]);


  // no es la idea usar esto, pero es para que se vea el valor del scroll (rerenders)
  useEffect(() => {
    return scrollY.onChange((value) => setYValue(value));
  }, [scrollY]);

  return (
    <div className="h-full">
      <h1 className="text-xl fixed">scroll: {yValue}</h1>
      <div className="w-full h-[200vh]	 flex items-center justify-center">
        <motion.div drag style={{ scale, x }}>Scrollea supercapo/a</motion.div>
      </div>
    </div>
  );
}
