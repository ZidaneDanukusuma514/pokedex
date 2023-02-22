import * as React from "react";

export interface IButtonSProps {
  value: number;
  BtnPd: string;
  BtnBr: string;
  handleFunc: (value: number) => void;
}

export default function ButtonS({
  value,
  BtnPd,
  BtnBr,
  handleFunc,
}: IButtonSProps) {
  return (
    <button
      className={`transition-all ease-in-out text-white hover:text-slate-800  hover:bg-white font-semibold ${BtnPd} ${BtnBr}`}
      onClick={() => handleFunc(value)}
    >
      {value}
    </button>
  );
}
