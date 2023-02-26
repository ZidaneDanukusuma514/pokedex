import * as React from "react";

export interface IButtonSliderProps {
  offset: number;
  limit: number;
  BtnPd: string;
  BtnBr: string;
  handleFunc: (offset: number, limit: number) => void;
}

export default function ButtonSlider({
  offset,
  limit,
  BtnPd,
  BtnBr,
  handleFunc,
}: IButtonSliderProps) {
  return (
    <button
      onClick={() => handleFunc(offset, limit)}
      className={`transition-all ease-in-out text-white bg-slate-800 hover:text-slate-800 hover:bg-white active:bg-slate-700  font-semibold ${BtnBr} ${BtnPd}`}
    >
      {offset}
    </button>
  );
}
