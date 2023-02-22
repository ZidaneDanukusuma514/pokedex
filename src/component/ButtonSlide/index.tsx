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
    <button className={`${BtnPd} ${BtnBr}`} onClick={() => handleFunc(value)}>
      {value}
    </button>
  );
}
