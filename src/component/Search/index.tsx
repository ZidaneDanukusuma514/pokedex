import * as React from "react";
import { PokemonContext } from "../../Context";
import { PokemonContexProps } from "../../Context/Interface";
import { useStore } from "../../Zustand";

export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  const [Search, setSearch] = React.useState("");
  const { handleGetSearch } = React.useContext(
    PokemonContext
  ) as PokemonContexProps;
  const handleSubmit = () => {
    handleGetSearch(Search);
  };

  return (
    <div className="mx-auto flex space-x-1 w-5/6 md:w-1/2">
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your pokemon here....."
        className="p-2 w-full"
        type="text"
      />
      <button
        className="text-white font-semibold bg-red-600 hover:bg-red-700 active:bg-red-600 active:border-[1px] active:border-white  p-2"
        type="submit"
        onClick={(e) => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}
