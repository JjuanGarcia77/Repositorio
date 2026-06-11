import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out' });
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08 });
    };

    const handleMouseEnterLink = () => {
      gsap.to(cursor, { scale: 1.8, opacity: 0.7 });
    };

    const handleMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, opacity: 1 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const links = document.querySelectorAll('a, button');
    links.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterLink);
      el.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Only show on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
