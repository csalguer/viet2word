import { motion } from "framer-motion";
import { ReactNode } from "react";

export const withZoom = (children: ReactNode, scale: number = 1.1) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ duration: 0.2 }}
    style={{ width: "100%", height: "100%" }}
  >
    {children}
  </motion.div>
);

export const withFadeOut = (children: ReactNode) => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    style={{ width: "100%", height: "100%" }}
  >
    {children}
  </motion.div>
);

export const withGreyedSelection = (children: ReactNode) => (
  <motion.div
    whileTap={{ filter: "grayscale(100%)" }}
    style={{ width: "100%", height: "100%" }}
  >
    {children}
  </motion.div>
);
