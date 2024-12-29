import { Code2, Info, Layers, Server, Share2 } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Safari from "./magicui/safari";
import DotPattern from "./magicui/dot-pattern";
import GridPattern from "./magicui/grid-pattern";
import { MarqueeDemo } from "./magicui/marquee-demo";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: Layers,
    name: "Tech Stack",
    description: "A list of technologies I work with",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <MarqueeDemo />,
  },
  {
    Icon: Code2,
    name: "Full Stack Integration",
    description: "Connecting frontend and backend seamlessly",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      //   <Safari
      //   className="absolute size-full p-5 bottom-10"
      //   src={"/images/1.png"}
      // />
      <DotPattern
        className={
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        }
      />
    ),
  },
  {
    Icon: Share2,
    name: "API Development",
    description: "Building RESTful APIs with Hono.js",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute h-[500px] w-full overflow-hidden">
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <Image
          src="/images/codeLight.png"
          width={"800"}
          height={"800"}
          alt=""
          className="absolute -right-60 top-10 border rounded-lg bg-white"
        />
      </div>
    ),
  },
  {
    Icon: Server,
    name: "Backend Development",
    description: "Creating scalable server solutions with Node.js",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        }
      />
    ),
  },
];

export function Skills() {
  return (
    <div className="container p-10" id="skills">
      <BentoGrid className="">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
