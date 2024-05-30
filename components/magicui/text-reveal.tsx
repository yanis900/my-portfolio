"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl space-x-2 lg:p-10 lg:text-4xl xl:text-5xl top-10 absolute"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <>
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isFirst={i === 0}
                  isLast={i === words.length - 1}
                >
                  {word}
                </Word>
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
  isFirst: boolean;
  isLast: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isFirst, isLast }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const className = isFirst || isLast
    ? "bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent"
    : "text-black dark:text-white";
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }} className={className}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
