import { create } from "zustand";

interface PokemonProps {
  log: string;
  DataApi: any[];
  CurrentPokemon: any[];
  handleApi: (props: any) => void;
  handleData: (props: any) => void;
}

export const useStore = create<PokemonProps>((set) => ({
  log: "Zustand is state management",
  DataApi: [],
  CurrentPokemon: [],
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
}));
