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

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      data-cursor="pointer"
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
