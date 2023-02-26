import * as React from "react";
import PokemonList from "../../component/PokemonList";
import PokemonItem from "../../component/PokemonItem";
import Header from "../../component/Header";
import { useStore } from "../../Zustand";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
import Search from "../../component/Search";
import PokemonListSlider from "../../component/PokemonListSlider";
import { Link } from "react-router-dom";
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
      <Link
        to={"/about"}
        className="transition-all ease-in fixed right-5 bottom-5 px-6 py-2 font-mono bg-white/50 hover:bg-white border-2 border-black/80 text-black/60 hover:text-black font-bold text-lg rounded-2xl lowercase"
      >
        About
      </Link>
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
