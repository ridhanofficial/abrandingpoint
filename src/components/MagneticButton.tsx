import { useRef, useState, type ReactNode, type ElementType } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [key: string]: unknown;
}

export default function MagneticButton({ children, className = "", as, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Component = motion.create(as || "button");

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  /** Spawn a ripple wave at the exact touch/click coordinate */
  const spawnRipple = (clientX: number, clientY: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.5;
    const ripple = document.createElement("span");
    ripple.className = "mag-ripple";
    ripple.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${clientX - rect.left - size / 2}px`,
      `top:${clientY - rect.top - size / 2}px`,
    ].join(";");
    target.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      data-cursor="pointer"
      onPointerDown={(e) => spawnRipple(e.clientX, e.clientY, e.currentTarget)}
    >
      <Component
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
        className={className}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}
