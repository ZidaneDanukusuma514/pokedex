import axios from "axios";
import * as React from "react";
import { createContext } from "react";
import { useStore } from "../Zustand";
import { PokemonContexProps } from "./Interface";

export interface IAppProps {
  children: React.ReactNode;
}
export const PokemonContext = createContext<PokemonContexProps | null>(null);

export const PokemonProvider = ({ children }: IAppProps) => {
  const {
    CurrentPokemon,
    DataApi,
    handleClear,
    handleApi,
    handleData,
    handleSearch,
  } = useStore();
  const [Testing, setTesting] = React.useState("testing context");
  const [Storage, setStorage] = React.useState<any[]>([]);
  const handleEarlyApi = async (offset: number) => {
    handleClear();
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${String(offset)}&limit=12`
      )
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

  const handleGetSearch = async (props: string) => {
    if (props === "") {
      handleClear();
      handleGetData();
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${props}`)
        .then((response) => {
          handleSearch(response.data);
        });
    }
  };

  return (
    <PokemonContext.Provider
      value={{ handleEarlyApi, handleGetSearch, handleGetData, Testing }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
