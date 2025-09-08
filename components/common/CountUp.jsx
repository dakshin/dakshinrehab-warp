"use client";
import React, { useEffect, useState, useRef } from "react";

const CountUp = ({ start = 0, end, duration = 2 }) => {
  const [count, setCount] = useState(start);
  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isCounting) return;

    let startTime;
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isCounting, start, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
