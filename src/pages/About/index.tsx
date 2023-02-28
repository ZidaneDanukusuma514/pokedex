import * as React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook } from "react-icons/bs";
import Linkto from "../../component/Linkto";
export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div className="h-screen bg-slate-800">
      <Linkto to="/">home</Linkto>
      <div className="w-1/2 h-1/2 p-2 left-0 right-0 top-28 rounded-xl mx-auto absolute bg-slate-300">
        <h1 className="py-4 text-center text-xl font-bold font-mono">
          Social media
        </h1>
        <p className="w-full font-mono">Contact me below</p>
        <div className="flex flex-wrap mt-4 gap-1 h-full justify-center">
          <a
            href="https://github.com/ZidaneDanukusuma514"
            className="grow h-1/2 p-2 transition-all ease-in text-black/60 hover:text-black cursor-pointer"
          >
            <BsGithub className="mx-auto text-black" size={"100px"} />
            <p className="text-center  font-bold p-4">Github</p>
          </a>
          <a
            href="https://www.facebook.com/zidane.polim/"
            className="grow h-1/2 p-2 transition-all ease-in text-black/60 hover:text-black cursor-pointer"
          >
            <BsFacebook className="mx-auto text-blue-700" size={"100px"} />
            <p className="text-center  font-bold p-4">Facebook</p>
          </a>
          <div className="bg-rose-500 grow h-1/2 ">
            <h1>Contact:</h1>
            <ul>
              <li>Phone Number: 08558864612</li>
              <li>Email: zidanereal514@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
