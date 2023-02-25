interface spritesProps {
  front_default: string;
  back_default: string;
}

export interface CurrentPokemonProps {
  name: string;
  sprites: spritesProps;
}

export interface PokemonProps {
  CurrentPokemon: CurrentPokemonProps[];
  InsertPokemon: (props: CurrentPokemonProps) => void;
  InsertAllPokemon: (props: CurrentPokemonProps) => void;
  ClearPokemon: () => void;
}
