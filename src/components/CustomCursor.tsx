import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  // Track visibility in a ref so the effect doesn't need to re-run when it changes
  const visibleRef = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
      const target = e.target as HTMLElement;
      setActive(!!target.closest('[data-cursor="pointer"], a, button'));
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []); // empty deps — subscribe once, use refs for mutable values

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: visible ? 1 : 0,
          width: active ? 56 : 40,
          height: active ? 56 : 40,
          backgroundColor: active ? "rgba(92,31,31,0.08)" : "transparent",
          borderColor: active ? "#5C1F1F" : "rgba(92,31,31,0.5)",
        }}
      />
    </>
  );
}
