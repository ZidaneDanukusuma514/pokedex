export interface PokemonContexProps {
  handleGetAllPokemon: (offset: number, limit: number) => void;
  handleSearchPokemon: (props: string) => void;
}
