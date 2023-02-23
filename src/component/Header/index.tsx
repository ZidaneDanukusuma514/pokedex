import * as React from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { handleGetAllPokemon } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;

  return (
    <header className="py-4">
      <Link onClick={() => handleGetAllPokemon(1, 12)} to={"/"}>
        <h1 className="text-2xl font-mono uppercase text-center text-white font-bold ">
          Pokedex
        </h1>
      </Link>
    </header>
  );
}
