import { motion, motionValue } from "framer-motion";

const DragBox = ({ children, dragConstraints }: any) => {
  const x = motionValue(0);
  const y = motionValue(0);

  return (
    <motion.div style={{ x, y }} drag dragConstraints={dragConstraints}>
      {children}
    </motion.div>
  );
};

export default DragBox;
