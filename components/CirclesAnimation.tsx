"use client"
import React, { useEffect, useState, useRef } from 'react';

export const CirclesAnimation = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(true); // Track mouse movement
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true); // Set mouse moving to true on mouse movement
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clear timeout and set mouse moving to false when mouse stops moving
    const handleMouseStop = () => {
      setIsMouseMoving(false);
    };

    const mouseMoveTimeout = setTimeout(handleMouseStop, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseMoveTimeout);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circlesRef.current.forEach((circle, index) => {
        if (!isMouseMoving) {
          // If mouse is not moving, return dot to cursor position
          circle.style.left = coords.x - 12 + 'px';
          circle.style.top = coords.y - 12 + 'px';
        } else {
          // If mouse is moving, continue animation
          circle.style.left = x - 12 + 'px';
          circle.style.top = y - 12 + 'px';

          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      cancelAnimationFrame(animateCircles);
    };
  }, [coords, isMouseMoving]);

  return (
    <div>
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default CirclesAnimation;
