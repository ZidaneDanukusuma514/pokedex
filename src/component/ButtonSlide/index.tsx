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
      className={`${({ isActive }: any) =>
        isActive
          ? "text-slate-800 bg-white"
          : "text-white bg-slate-800"} transition-all ease-in-out  hover:text-white hover:bg-slate-800 active:bg-slate-700  font-semibold ${BtnBr} ${BtnPd}`}
      onClick={() => handleFunc(value)}
    >
      {value}
    </button>
  );
}
