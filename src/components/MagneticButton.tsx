import React, { type ReactNode, type ElementType } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [key: string]: unknown;
}

/**
 * Simple button wrapper — no magnetic physics, no movement.
 * All interaction styles are handled by CSS (.btn-sweep).
 */
export default function MagneticButton({
  children,
  className = "",
  as: Tag = "button",
  ...props
}: MagneticButtonProps) {
  return React.createElement(
    Tag,
    { className, "data-cursor": "pointer", ...props },
    children,
  );
}
