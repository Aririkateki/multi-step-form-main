import React from "react";
import { FaGamepad } from "react-icons/fa";
import { IoLogoGameControllerA } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";
import { useState } from "react";
export default function Form2({yearlyPlan,setYearlyPlan,activeplan,setActiveplan}) {
 
  return (
    <div className="my-10 flex flex-col gap-10">
      <div className="w-full grid grid-cols-3 xl:grid-cols-1 gap-5 ">
        <div className={`w-40 xl:w-full xl:flex-row xl:h-auto xl:justify-start xl:items-center xl:gap-3 px-4 border border-lightGray ${activeplan ===1 && "bg-mainbg"} hover:border-LightBlue cursor-pointer transition-all hover:bg-mainbg flex flex-col justify-between items-start py-4 ${!yearlyPlan && "h-44"}  rounded-lg`} onClick={()=>setActiveplan(1)}>
          <div className="w-14 h-14 rounded-full bg-[#ffaf7d] flex justify-center items-center text-white">
            <span className="text-white text-3xl">
              <GiGearStick />
            </span>
          </div>
          <div className={`flex flex-col gap-1`}>
            <span className="text-DarkBlue text-lg">Arcade</span>
            <span className="text-lightGray text-sm">
              {yearlyPlan ? "$90/yr" : "$9/mo"}
            </span>
            {yearlyPlan && (
              <span className="text-sm text-DarkBlue">2 months free</span>
            )}
          </div>
        </div>
        <div className={`w-40 xl:w-full xl:flex-row xl:h-auto xl:justify-start xl:items-center xl:gap-3 px-4 border border-lightGray ${activeplan ===2 && "bg-mainbg"} hover:border-LightBlue cursor-pointer transition-all hover:bg-mainbg flex flex-col justify-between items-start py-4  rounded-lg`} onClick={()=>setActiveplan(2)}>
          <div className="w-14 h-14 rounded-full bg-[#f5808a] flex justify-center items-center text-white">
            <span className="text-white text-3xl">
              <IoLogoGameControllerA />
            </span>
          </div>
          <div className={`flex flex-col gap-1 ${yearlyPlan && "mt-10"} xl:mt-0 `}>
            <span className="text-DarkBlue text-lg">Advanced</span>
            <span className="text-lightGray text-sm">
              {yearlyPlan ? "$90/yr" : "$12/mo"}
            </span>
            {yearlyPlan && (
              <span className="text-sm text-DarkBlue">2 months free</span>
            )}
          </div>
        </div>
        <div className={`w-40 xl:w-full xl:flex-row xl:h-auto xl:justify-start xl:items-center xl:gap-3 px-4 border border-lightGray ${activeplan ===3 && "bg-mainbg"} hover:border-LightBlue cursor-pointer transition-all hover:bg-mainbg flex flex-col justify-between items-start py-4  rounded-lg`} onClick={()=>setActiveplan(3)}>
          <div className="w-14 h-14 rounded-full bg-[#473dff] flex justify-center items-center text-white">
            <span className="text-white text-3xl">
              <FaGamepad />
            </span>
          </div>
          <div className={`flex flex-col gap-1`}>
            <span className="text-DarkBlue text-lg">Pro</span>
            <span className="text-lightGray text-sm">
              {yearlyPlan ? "$90/yr" : "$9/mo"}
            </span>
            {yearlyPlan && (
              <span className="text-sm text-DarkBlue">2 months free</span>
            )}
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-mainbg p-5 flex gap-3 justify-center items-center">
        <span class=" text-sm text-gray-900 dark:text-gray-300 text-DarkBlue font-bold">
          Momthly
        </span>
        <label class="relative inline-flex items-center cursor-pointer mx-4">
          <input
            type="checkbox"
            value=""
            class="sr-only peer "
            onChange={() => setYearlyPlan(!yearlyPlan)}
          />
          <div class="bg-DarkBlue w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span class=" text-sm text-gray-900 dark:text-gray-300 text-DarkBlue font-bold">
          Yearly
        </span>
      </div>
    </div>
  );
}
