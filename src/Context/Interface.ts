export interface PokemonContexProps {
  Testing: string;
  handleEarlyApi: (offset: number) => void;
  handleGetData: () => void;
  handleGetSearch: (props: string) => void;
  handleTest: () => void;
}
