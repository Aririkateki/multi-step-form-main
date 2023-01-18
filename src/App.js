import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./components/forms/Forms";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-[80%] grid grid-cols-[1fr,2fr] xl:grid-cols-1 xl:w-full xl:h-full xl:bg-opacity-0 xl:relative shadow-lg bg-white w-3/5 p-5 border-0 rounded-2xl m-auto">
        <Sidebar formNumber={step}/>
        <div className="flex justify-center items-center xl:rounded-2xl xl:z-10 xl:top-28 xl:justify-self-center xl:absolute xl:w-8/12 sm:w-10/12 xl:bg-white">
          <Routes>
            <Route element={<Forms step={step} setStep={setStep} />} path={"/"} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
