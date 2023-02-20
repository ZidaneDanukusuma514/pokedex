import axios from "axios";
import * as React from "react";
import { createContext } from "react";
import { useStore } from "../../Zustand";
import { PokemonContexProps } from "./Interface";

export interface IAppProps {
  children: React.ReactNode;
}
export const PokemonContext = createContext<PokemonContexProps | null>(null);

export const PokemonProvider = ({ children }: IAppProps) => {
  const { CurrentPokemon, DataApi, handleApi, handleData } = useStore();
  const [Testing, setTesting] = React.useState("testing context");
  const handleEarlyApi = async (offset: string) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
      .then((state) => state.data)
      .then((respon) => {
        handleApi(respon.results);
      });
  };
  const handleGetData = () => {
    DataApi.forEach(async (state: any) => {
      await axios
        .get(state.url)
        .then((response) => response.data)
        .then((response) => {
          handleData(response);
        });
    });
  };
  return (
    <PokemonContext.Provider value={{ handleEarlyApi, handleGetData, Testing }}>
      {children}
    </PokemonContext.Provider>
  );
};
