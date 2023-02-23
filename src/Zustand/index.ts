import { create } from "zustand";
import { PokemonProps } from "./Interface";
// Main state that store all pokemon value is 'CurrentPokemon'
// Main function InsertAllPokemon
export const useStore = create<PokemonProps>((set) => ({
  CurrentPokemon: [],
  InsertPokemon: (props: any) => {
    set(() => ({
      CurrentPokemon: [props],
    }));
  },
  InsertAllPokemon: (props: any) => {
    set((state) => ({
      CurrentPokemon: [...state.CurrentPokemon, props],
    }));
  },
  ClearPokemon: () => {
    set(() => ({
      CurrentPokemon: [],
    }));
  },
}));
