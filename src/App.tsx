import { Suspense} from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

const fetchData = async () => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
};

const App = () => {
  

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
