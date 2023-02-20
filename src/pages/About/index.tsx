import * as React from "react";
import { Link } from "react-router-dom";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <div>
      <Link to={"/"}>back</Link>
    </div>
  );
}
