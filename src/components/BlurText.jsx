import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Premium Blur-to-Clear Text Reveal Component
 * Smoothly transitions text from an atmospheric motion blur into razor-sharp focus while scrolling.
 * Supports word-by-word staggered reveal, letter-by-letter, or sentence-level transitions.
 */
const BlurText = ({
  text = '',
  highlight = '',
  highlightClassName = 'text-[#E57A36]',
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.045,
  duration = 0.65,
  animateBy = 'words', // 'words' | 'letters' | 'none'
  blurAmount = '14px',
  once = true,
  threshold = 0.1,
  children
}) => {
  const content = text || (typeof children === 'string' ? children : '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Helper to determine if a word matches the highlight string/array
  const checkHighlight = (word) => {
    if (!highlight) return false;
    const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (!cleanWord) return false;

    if (Array.isArray(highlight)) {
      return highlight.some(h => {
        const cleanH = h.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanWord.includes(cleanH) || cleanH.includes(cleanWord);
      });
    }

    const cleanHighlight = highlight.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanHighlight.includes(cleanWord) || cleanWord.includes(cleanHighlight);
  };

  // Word-by-word animation
  if (animateBy === 'words' && content) {
    const words = content.split(' ');

    return (
      <Tag ref={ref} className={`inline-block ${className}`}>
        {words.map((word, index) => {
          const isHighlighted = checkHighlight(word);

          return (
            <span key={index} className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0">
              <motion.span
                className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
                initial={{
                  opacity: 0,
                  y: 18,
                  filter: `blur(${blurAmount})`,
                  scale: 0.98,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        y: 18,
                        filter: `blur(${blurAmount})`,
                        scale: 0.98,
                      }
                }
                transition={{
                  duration,
                  delay: delay + index * stagger,
                  ease: [0.16, 1, 0.3, 1], // Linear / Dribbble cubic-bezier curve
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    );
  }

  // Letter-by-letter animation
  if (animateBy === 'letters' && content) {
    const letters = content.split('');

    return (
      <Tag ref={ref} className={`inline-block ${className}`}>
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{
              opacity: 0,
              y: 12,
              filter: `blur(${blurAmount})`,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }
                : {
                    opacity: 0,
                    y: 12,
                    filter: `blur(${blurAmount})`,
                  }
            }
            transition={{
              duration: duration * 0.8,
              delay: delay + index * (stagger * 0.35),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Tag>
    );
  }

  // Whole block / sentence blur-to-clear
  return (
    <Tag ref={ref} className={className}>
      <motion.div
        className="w-full inline-block"
        initial={{
          opacity: 0,
          y: 20,
          filter: `blur(${blurAmount})`,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }
            : {
                opacity: 0,
                y: 20,
                filter: `blur(${blurAmount})`,
              }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children || content}
      </motion.div>
    </Tag>
  );
};

export { BlurText };
export default BlurText;
