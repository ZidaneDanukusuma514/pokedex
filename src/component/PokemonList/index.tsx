import * as React from "react";

export interface IPokemonListProps {
  children: React.ReactNode;
}

export default function PokemonList({ children }: IPokemonListProps) {
  return (
    <div className="grid grid-cols-4 gap-1 justify-items-center content-center">
      {children}
    </div>
  );
}
