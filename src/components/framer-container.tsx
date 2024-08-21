"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};
export function DivContainer({ children, className = "" }: ContainerProps) {
  return (
    <motion.div
      className={cn("", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      {children}
    </motion.div>
  );
}
export function SectionContainer({ children, className = "" }: ContainerProps) {
  return (
    <motion.section
      className={cn("w-full py-12 md:py-24 lg:py-32", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      {children}
    </motion.section>
  );
}
