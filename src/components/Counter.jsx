import { useState, useEffect, useRef } from 'react';

const Counter = ({ target, suffix = '', duration = 1400, className = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  // Extract pure number and any suffix passed inside target if any (e.g. '100+' -> target: 100, suffix: '+')
  const numericTarget = typeof target === 'number'
    ? target
    : parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0;

  const displaySuffix = suffix || (typeof target === 'string' ? target.replace(/[0-9]/g, '') : '');

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Gate 27: under prefers-reduced-motion the count snaps to its final value.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            observer.unobserve(el);

            if (reduced) {
              setCount(numericTarget);
              return;
            }

            let start = null;

            const step = (timestamp) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * numericTarget));

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCount(numericTarget);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [numericTarget, duration]);

  return (
    <span
      ref={elementRef}
      className={`tabular-data ${className}`}
      data-count={numericTarget}
      data-suffix={displaySuffix}
    >
      {count}{displaySuffix}
    </span>
  );
};

export default Counter;
