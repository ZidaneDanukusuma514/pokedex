import * as React from "react";

export interface IPokemonItemProps {
  data: any;
}

export default function PokemonItem({ data }: IPokemonItemProps) {
  return (
    <div className="bg-slate-200 flex flex-col items-center border-2 w-full">
      <div className="mx-auto">
        <img src={data.sprites.front_default} alt="" />
        <img src={data.sprites.back_default} alt="" />
      </div>
      <h1 className="font-semibold text-lg text-center">{data.name}</h1>
    </div>
  );
}
