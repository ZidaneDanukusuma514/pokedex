import * as React from "react";
import { Link } from "react-router-dom";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="py-4">
      <Link to={"/"}>
        <h1 className="text-2xl font-mono uppercase text-center text-white font-bold ">
          Pokedex
        </h1>
      </Link>
    </header>
  );
}
