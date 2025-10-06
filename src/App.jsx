import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="max-w-[1440px ]  mx-auto h-screen bg-red-400">
      <Header />
      <Hero />
      <Movies />
    </div>
  );
}

export default App;
