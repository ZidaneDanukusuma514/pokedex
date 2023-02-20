import * as React from "react";
import Pokemon from "../../component/PokemonItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../../Zustand";
import PokemonList from "../../component/PokemonList";
import PokemonItem from "../../component/PokemonItem";
import Header from "../../component/Header";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { DataApi, CurrentPokemon } = useStore();
  const { handleEarlyApi, handleGetData } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;
  useEffect(() => {
    handleEarlyApi(1);
  }, []);
  useEffect(() => {
    handleGetData();
  }, [DataApi]);

  return (
    <div className="w-full bg-slate-700">
      <div className="container mx-auto ">
        <Header />
        <p>Current pokemon Shown {CurrentPokemon.length}</p>

        <PokemonList>
          {CurrentPokemon.length > 0 ? (
            CurrentPokemon.map((item, index) => (
              <PokemonItem key={index} data={item} />
            ))
          ) : (
            <h1 className="justify-self-center font-bold text-white ">
              No pokemon here
            </h1>
          )}
        </PokemonList>
      </div>
    </div>
  );
}
