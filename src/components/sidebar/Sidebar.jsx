import React from "react";
import { steps } from "../../variables/sidebar";
import "../../assets/css/sidebar.css";

export default function Sidebar({ formNumber }) {
  return (
    <div
      className="flex flex-col xl:!flex-row items-start  xl:mb-44
     xl:absolute xl:rounded-none xl:w-full xl:justify-center xl:z-0 xl:pb-44 sm:pb-36 xl:pt-8 sm:gap-5 top-0 gap-8 
     rounded-2xl py-12 px-8 sidebar"
    >
      {steps.map((step, index) => {
        return (
          <div className="flex items-center gap-5 md:gap-0">
            <div
              className={`px-4 py-2 rounded-full  ${
                formNumber === index && "bg-[#bee2fc] !border-0 !text-DarkBlue"
              } text-white border`}
            >
              {index + 1}
            </div>
            <div className="flex flex-col justify-start">
              <span className="text-[#7f7cff] text-sm xl:hidden md:hidden">
                {step.number}
              </span>
              <span className="text-white text-md xl:hidden md:hidden">
                {step.title}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
