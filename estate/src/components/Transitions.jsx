import { motion } from "framer-motion";

// Configuration for the animations
const animationConfiguration = {
  initial: { opacity: 0, width: "100%", overflow: "hidden" }, // Initial state (hidden)
  animate: { opacity: 1, width: "100%", overflow: "hidden" }, // Animation state (visible)
  exit: { opacity: 0, width: "100%", overflow: "hidden" }, // Exit state (hidden)
};

// Transitions component to apply animations to its children
const Transitions = ({ children }) => {
  return (
    // Apply motion animations to the children
    <motion.div
      variants={animationConfiguration} // Use the defined animation configuration
      initial="initial" // Initial animation state
      animate="animate" // Animation state
      exit="exit" // Exit animation state
      transition={{ duration: 2.8 }} // Transition duration for animations
    >
      {children} {/* The content to which animations will be applied */}
    </motion.div>
  );
};

export default Transitions;
