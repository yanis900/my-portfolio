import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";

const stack = [
  {
    name: "nextJs",
    img: "/icons/nextJs.svg",
  },
  {
    name: "reactJs",
    img: "/icons/react.svg",
  },
  {
    name: "tailwindCss",
    img: "/icons/tailwind.svg",
  },
  {
    name: "honoJs",
    img: "/icons/hono.svg",
  },
  {
    name: "expressJs",
    img: "/icons/express.svg",
  },
  {
    name: "nodeJs",
    img: "/icons/nodejs.svg",
  },
  {
    name: "cloudflare",
    img: "/icons/cloudflare.svg",
  },
];

const firstRow = stack.slice(0, stack.length / 2);
const secondRow = stack.slice(stack.length / 2);

const StackCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "transform-gpu blur-[0.5px] transition-all duration-300 ease-out hover:blur-none"
      )}
    >
      <div className="flex gap-2 items-center justify-center">
        <img src={img} alt="" width={25} height={25} />
        <figcaption className="text-sm font-medium">{name}</figcaption>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="absolute top-10">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item) => (
          <StackCard key={item.name} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((item) => (
          <StackCard key={item.name} {...item} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
