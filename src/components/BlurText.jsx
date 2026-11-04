import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Masked Baseline reveal — an architectural mask: each word rises from below
 * its own overflow-hidden line box ("105%" → "0%"), like a drawing plotter
 * laying down type. Transform + opacity only (Gate 10a), fires once,
 * static visible markup under prefers-reduced-motion (Gates 27, 62).
 *
 * Single-word highlight parameters were removed (Gate 38iii): display
 * headings carry one weight and one colour, from the surrounding type system.
 */
const MaskedText = ({
  text = '',
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.03,
  duration = 0.5,
  children
}) => {
  const content = text || (typeof children === 'string' ? children : '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const words = content ? content.split(' ') : [];

  if (!content) {
    return <Tag ref={ref} className={className}>{children}</Tag>;
  }

  if (prefersReducedMotion) {
    return <Tag ref={ref} className={className}>{content}</Tag>;
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '105%', opacity: 0 }}
            animate={
              isInView
                ? { y: '0%', opacity: 1 }
                : { y: '105%', opacity: 0 }
            }
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {word}{index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export { MaskedText as BlurText };
export default MaskedText;
