import * as React from "react";
import { Link } from "react-router-dom";

export interface ILinktoProps {
  to: string;
  children: React.ReactNode;
}

export default function Linkto(props: ILinktoProps) {
  return (
    <Link
      to={props.to}
      className="transition-all ease-in fixed right-5 bottom-5 px-6 py-2 font-mono bg-white/50 hover:bg-white border-2 border-black/80 text-black/60 hover:text-black font-bold text-lg rounded-2xl lowercase"
    >
      {props.children}
    </Link>
  );
}
