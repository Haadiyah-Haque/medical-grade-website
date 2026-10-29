import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function Reveal({ children, className = "", delay, as: Tag = "div" }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref as never} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
