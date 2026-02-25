import React, { useState, useEffect, useRef } from "react";

export default function Fade({ children }) {
  const domRef = useRef(null);

  // If IntersectionObserver isn't available, default to visible
  const [isVisible, setIsVisible] = useState(
    typeof window !== "undefined" && "IntersectionObserver" in window ? false : true
  );

  useEffect(() => {
    if (isVisible) return;

    const node = domRef.current;
    if (!node) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 600ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
