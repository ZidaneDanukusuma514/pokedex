import axios from "axios";
import * as React from "react";
import { createContext } from "react";
import { useStore } from "../../Zustand";

export interface IAppProps {
  children: React.ReactNode;
}
export interface PokemonProps {
  handleEarlyApi: (offset: string) => void;
}

const PokemonContext = createContext<PokemonProps | null>(null);

export const PokemonProvider = ({ children }: IAppProps) => {
  const { handleApi } = useStore();

  const handleEarlyApi = (offset: string) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10")
      .then((state) => state.data)
      .then((respon) => {
        handleApi(respon.results);
      });
  };
  return (
    <PokemonContext.Provider value={{ handleEarlyApi }}>
      {children}
    </PokemonContext.Provider>
  );
};
