"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "./card-stack";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full absolute -bottom-28 left-10">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "John Doe",
    designation: "CTO, TechCorp",
    content: (
      <p>
        <Highlight>Beautifully designed, optimized components. Outstanding performance!</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc.",
    content: (
      <p>
        <Highlight>Exceeded expectations. Seamless launch boosted engagement.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Michael Brown",
    designation: "Lead Developer, Creative Solutions",
    content: (
      <p>
        <Highlight>Top-notch architecture. Phenomenal efficiency gains.</Highlight>
      </p>
    ),
  },
]
