import * as React from "react";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
import ButtonSliderlider from "../ButtonSlider";
import ButtonSlider from "../ButtonSlider";

export interface IPokemonListSliderProps {}
export default function PokemonListSlider(props: IPokemonListSliderProps) {
  const { handleGetAllPokemon } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;

  return (
    <div className="flex justify-center space-x-5 p-4">
      <ButtonSlider
        offset={1}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonSlider
        offset={10}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonSlider
        offset={20}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonSlider
        offset={30}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonSlider
        offset={40}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonSlider
        offset={50}
        limit={12}
        handleFunc={handleGetAllPokemon}
        BtnBr="border-2"
        BtnPd="p-3"
      />
    </div>
  );
}
