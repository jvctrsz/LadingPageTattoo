import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonNavProps {
  path: string;
  children: string | number | ReactNode;
}

export const ButtonNav = ({ path, children }: ButtonNavProps) => {
  return (
    <Link
      href={path}
      className="inline-flex items-center gap-2 border text-black border-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
    >
      {children}
      <ArrowRightIcon className="size-4" />
    </Link>
  );
};
