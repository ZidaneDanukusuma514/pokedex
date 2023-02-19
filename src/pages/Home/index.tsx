import * as React from "react";
import Pokemon from "../../component/PokemonItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../../Zustand";
import PokemonList from "../../component/PokemonList";
import PokemonItem from "../../component/PokemonItem";
import Header from "../../component/Header";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { handleApi, handleData, DataApi, CurrentPokemon } = useStore();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10")
      .then((state) => state.data)
      .then((respon) => {
        handleApi(respon.results);
      });
    console.log("Api: ", DataApi);
  }, []);

  const ShowPokemon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    DataApi.forEach(async (state: any) => {
      await axios
        .get(state.url)
        .then((response) => response.data)
        .then((response) => {
          handleData(response);
        });
    });
    console.log("Pokemon: ", CurrentPokemon);
  };

  return (
    <div className="w-full bg-slate-700">
      <div className="container mx-auto h-screen ">
        <Header />
        <PokemonList>
          <button
            className="col-span-4 border-2 p-4 bg-slate-200 hover:bg-slate-400"
            onClick={(e) => ShowPokemon(e)}
          >
            Show Pokemon
          </button>
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
