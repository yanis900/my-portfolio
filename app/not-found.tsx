import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <DotPattern
        className={
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        }
      />
      <div className="text-left flex-col flex gap-5 z-10">
        <div className="space-y-2">
          <h1>❌ │ Not Found</h1>
          <h2>Could not find requested resource</h2>
        </div>
        <Link href="/">
          <Button
            className="flex justify-center group overflow-hidden relative"
            variant={"outline"}
          >
            <span className="group-hover:translate-x-40 text-center transition duration-500">
              Return Home
            </span>
            <div className="-translate-x-40 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              🏠
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
