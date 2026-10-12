import { motion } from 'framer-motion';

const variantsMap = {
  'fade-up': {
    hidden: { opacity: 0, y: 32, filter: 'blur(12px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -32, filter: 'blur(12px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  },
  'fade-left': {
    hidden: { opacity: 0, x: 40, filter: 'blur(12px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
  },
  'fade-right': {
    hidden: { opacity: 0, x: -40, filter: 'blur(12px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.92, filter: 'blur(10px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
  },
  'fade': {
    hidden: { opacity: 0, filter: 'blur(12px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },
  'blur-text': {
    hidden: { opacity: 0, y: 20, filter: 'blur(14px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  },
  'blur-reveal': {
    hidden: { opacity: 0, y: 28, filter: 'blur(16px)', scale: 0.98 },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
  },
  'blur-scale': {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(16px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
  }
};

const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = '',
  viewport = { once: false, amount: 0.12, margin: "0px 0px -40px 0px" }
}) => {
  const selectedVariant = variantsMap[variant] || variantsMap['fade-up'];

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Saitronics signature cubic-bezier curve
      }}
      className={className}
      data-aos={variant}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
