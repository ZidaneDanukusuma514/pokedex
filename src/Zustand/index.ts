import { create } from "zustand";

interface PokemonProps {
  log: string;
  DataApi: any[];
  CurrentPokemon: any[];
  Data: any[];
  handleApi: (props: any) => void;
  handleData: (props: any) => void;
  handleSearch: (props: any) => void;
}

export const useStore = create<PokemonProps>((set) => ({
  log: "Zustand is state management",
  DataApi: [],
  CurrentPokemon: [],
  Data: [],
  handleApi: (props: any) => {
    set((state) => ({
      DataApi: props,
    }));
  },
  handleData: (props: any) => {
    set((state) => ({
      CurrentPokemon: [...state.CurrentPokemon, props],
    }));
  },
  handleSearch: (props: any) => {
    set((state) => ({
      CurrentPokemon: [props],
    }));
  },
}));
