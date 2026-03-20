import { classNames } from "@/src/miscellaneous";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonNavProps {
  path: string;
  children: string | number | ReactNode;
  color?: keyof typeof colors;
}

const colors = {
  black: "text-black border-black hover:bg-black hover:text-white",
  white: "text-white border-white hover:bg-white hover:text-black",
};

export const ButtonNav = ({
  path,
  children,
  color = "black",
}: ButtonNavProps) => {
  return (
    <Link
      href={path}
      className={classNames(
        "inline-flex items-center gap-2 border px-6 py-3 text-sm uppercase tracking-wider transition-colors",
        colors[color],
      )}
    >
      {children}
      <ArrowRightIcon className="size-4" />
    </Link>
  );
};
