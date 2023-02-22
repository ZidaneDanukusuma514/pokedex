import * as React from "react";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
import { useStore } from "../../Zustand";
import ButtonS from "../ButtonSlide";

export interface IPokemonListSliderProps {}
export default function PokemonListSlider(props: IPokemonListSliderProps) {
  const { handleEarlyApi } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;

  return (
    <div className="flex justify-center space-x-5 m-4">
      <ButtonS
        value={10}
        handleFunc={handleEarlyApi}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        value={20}
        handleFunc={handleEarlyApi}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        value={30}
        handleFunc={handleEarlyApi}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        value={40}
        handleFunc={handleEarlyApi}
        BtnBr="border-2"
        BtnPd="p-3"
      />
      <ButtonS
        value={50}
        handleFunc={handleEarlyApi}
        BtnBr="border-2"
        BtnPd="p-3"
      />
    </div>
  );
}
