import { Variants } from "framer-motion";

export const slideUp: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        type: "spring", 
        mass: 0.5,
       }
    },
};

export const slideDown: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5,
      type: "spring", 
      mass: 0.5,
    }
  },
};

export const slideRight: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.5,
      type: "spring", 
      mass: 0.5,
    }
  },
};

export const slideRightSlow: Variants = {
    offscreen: {
      left: -100,
      opacity: 0,
    },
    onscreen: {
      left: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      }
    },
};

export const container: Variants = {
    onscreen: {
        transition: {
            duration: 0.3,
            staggerChildren: 0.15
        }
    },
};

export const viewport = { once: true, margin: "-20% 0px -20% 0px" }
