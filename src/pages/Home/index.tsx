import * as React from "react";
import PokemonList from "../../component/PokemonList";
import PokemonItem from "../../component/PokemonItem";
import Header from "../../component/Header";
import { useStore } from "../../Zustand";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
import { Link } from "react-router-dom";
import Search from "../../component/Search";
import PokemonListSlider from "../../component/PokemonListSlider";
import Linkto from "../../component/Linkto";
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const { CurrentPokemon } = useStore();
  const { handleGetAllPokemon } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;

  React.useEffect(() => {
    handleGetAllPokemon(1, 12);
  }, []);

  return (
    <div className="w-full bg-slate-700">
      <Linkto to={"/about"}>About</Linkto>
      <div className="container mx-auto ">
        <Header />
        <Search />
        <PokemonList>
          {CurrentPokemon.length > 0 ? (
            CurrentPokemon.map((item, index) => (
              <PokemonItem key={index} data={item} />
            ))
          ) : (
            <h1 className="h-screen justify-self-center font-bold text-white ">
              No pokemon here
            </h1>
          )}
        </PokemonList>

        <PokemonListSlider />
      </div>
    </div>
  );
}
