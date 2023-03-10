import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./Context";
import About from "./pages/About";
import Home from "./pages/Home";
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}
