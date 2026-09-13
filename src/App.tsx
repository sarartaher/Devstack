import React, { Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import type { TechTypeProps } from "./types/TechTypeProps";

const fetchData = async () => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const [tech, setTech] = useState<TechTypeProps[]>([]);
  const [selectedCard, setSelectedCard] = useState<TechTypeProps[]>([]);

  const handleAddStack = (tech: TechTypeProps) => {
    const ex = selectedCard.find((item) => item.id === tech.id)
      ? toast.warn(`${tech.name} is already your stack`, {
          position: "top-right",
        })
      : setSelectedCard((item) => [...item, tech]);
    toast.success(`${tech.name} is already your stack`, {
      position: "top-right",
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="py-20 text-center text-slate-500">
            Loading technologies...
          </div>
        }
      >
        <Explore fetchdata={fetchData()} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
