"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    filter: "blur(10px)",
    clipPath: "inset(0% 100% 0% 0%)",
    opacity: 0,
  },
  in: { filter: "blur(0px)", clipPath: "inset(0%)", opacity: 1 },
  out: { filter: "blur(10px)", clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      initial="initial"
      animate={isVisible ? "in" : "out"}
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="max-md:hidden"
    >
      {children}
    </motion.div>
  );
};