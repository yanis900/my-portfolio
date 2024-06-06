import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import GridPattern from "./magicui/grid-pattern";
import { cn } from "@/lib/utils";

const bentoCardItems = [
  {
    name: "",
    description: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-4",
  },
  {
    name: "",
    description: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-6",
  },
  {
    name: "",
    description: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-6",
  },
  {
    name: "Coding",
    description: "fun application bla bla bla",
    background: (
      <>
        {" "}
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [6, 6],
            [10, 5],
            [13, 3],
          ]}
          className={cn("inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")}
        />{" "}
        <img
          src="/code.png"
          className="absolute -bottom-20 -right-40 opacity-90 rounded-lg"
        />{" "}
      </>
    ),
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-6",
  },
  {
    name: "",
    description: "",
    background: "",
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3",
  },
  {
    name: "",
    description: "",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-3",
  },
];

export async function Skills() {
  return (
    <div id="skills" className="p-20">
      <BentoGrid>
        {bentoCardItems.map((items) => (
          <BentoCard key={items.name} {...items} />
        ))}
      </BentoGrid>
    </div>
  );
}
