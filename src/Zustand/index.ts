import { create } from "zustand";
import { CurrentPokemonProps, PokemonProps } from "./Interface";
// Main state that store all pokemon value is 'CurrentPokemon'
// Main function InsertAllPokemon
export const useStore = create<PokemonProps>((set) => ({
  CurrentPokemon: [],
  InsertPokemon: (props: CurrentPokemonProps) => {
    set(() => ({
      CurrentPokemon: [props],
    }));
  },
  InsertAllPokemon: (props: CurrentPokemonProps) => {
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
