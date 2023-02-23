import * as React from "react";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
import { useStore } from "../../Zustand";
import ButtonS from "../ButtonSlide";

export interface IPokemonListSliderProps {}
export default function PokemonListSlider(props: IPokemonListSliderProps) {
  const { handleGetAllPokemon } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;

  return (
    <div className="flex justify-center space-x-5 p-4">
      <ButtonS
        offset={1}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        offset={10}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        offset={20}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        offset={30}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        offset={40}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        offset={50}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
    </div>
  );
}
