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
import Search from "../../component/Search";
import PokemonListSlider from "../../component/PokemonListSlider";
import PokemonListTest from "../../component/PokemonListTest";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { Data, DataApi, CurrentPokemon, Test } = useStore();
  const { handleEarlyApi, handleGetData, handleTest } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;

  useEffect(() => {
    handleEarlyApi(1);
    handleTest();
  }, []);
  useEffect(() => {
    handleGetData();
  }, [DataApi]);

  return (
    <div className="w-full bg-slate-700">
      <div className="container mx-auto ">
        <Header />
        <Search />
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
        <PokemonListTest>
          {Test.length > 0 ? (
            Test.map((item, index) => <PokemonItem key={index} data={item} />)
          ) : (
            <h1 className="justify-self-center font-bold text-white ">
              No pokemon here
            </h1>
          )}
        </PokemonListTest>
        <PokemonListSlider />
      </div>
    </div>
  );
}
