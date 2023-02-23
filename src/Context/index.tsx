import axios from "axios";
import * as React from "react";
import { createContext } from "react";
import { useStore } from "../Zustand";
import { PokemonContexProps } from "./Interface";

// Main function is handleGetAllPokemon

export interface IAppProps {
  children: React.ReactNode;
}
export const PokemonContext = createContext<PokemonContexProps | null>(null);

export const PokemonProvider = ({ children }: IAppProps) => {
  const { InsertAllPokemon, ClearPokemon, InsertPokemon } = useStore();

  const handleGetAllPokemon = async (offset: number, limit: number) => {
    ClearPokemon();
    for (let i = offset; i <= offset + limit; i++) {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => {
          InsertAllPokemon(response.data);
        })
        .catch((response) => {
          console.log("Api:", response);
        });
    }
  };
  const handleSearchPokemon = async (props: string) => {
    if (props === "") {
      handleGetAllPokemon(1, 12);
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props}`)
        .then((response) => {
          InsertPokemon(response.data);
        });
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        handleSearchPokemon,
        handleGetAllPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
