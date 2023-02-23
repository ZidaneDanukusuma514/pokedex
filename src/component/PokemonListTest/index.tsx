import * as React from "react";

export interface IPokemonListTestProps {
  children?: React.ReactNode;
}

export default function PokemonListTest({ children }: IPokemonListTestProps) {
  return (
    <div className="h-screen grid grid-cols-2 md:grid-cols-4 my-4 gap-1 justify-items-center content-center">
      {children}
    </div>
  );
}
