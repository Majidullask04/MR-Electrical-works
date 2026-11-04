import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll reveal — GPU-composited transform/opacity only (Gate 10a).
 * No filter: blur, no layout-property animation. Fires once per element
 * and renders fully visible markup under prefers-reduced-motion (Gates 27, 62).
 */
const variantsMap = {
  'fade-up': {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-left': {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  'fade-right': {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 }
  },
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.45,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();
  const selectedVariant = variantsMap[variant] || variantsMap['fade-up'];

  // Gate 27/62: under reduced motion every variant lands immediately at rest.
  if (prefersReducedMotion) {
    return (
      <div
        className={className}
        style={{ opacity: 1, transform: 'none' }}
        data-reveal={variant}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      data-reveal={variant}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
