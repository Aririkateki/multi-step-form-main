import React, { useState } from "react";
import { pickAddFormText } from "../../variables/forms";

export default function Form3({yearlyPlan,activeplan,setActiveplan}) {

 
  const checboxActive = (e) => {
    if (e.target.checked) {
      setActiveplan([...activeplan, +e.target.id]);
    } else {
      const restPlan = activeplan.filter((plan) => plan !== +e.target.id);
      setActiveplan(restPlan);
    }
  };
  return (
    <div className="my-10 w-full flex flex-col gap-5 ">
      {pickAddFormText.map((item, index) => {
        return (
          <div
            key={item.title}
            className={`px-4 border border-lightGray xl:gap-2 ${
              activeplan.includes(index) == true && "bg-mainbg"
            } hover:border-LightBlue cursor-pointer transition-all flex items-center justify-between gap-32  py-4 rounded-lg`}
          >
            <div className="flex justify-between gap-5 items-center ">
              <input
                type="checkbox"
                className="w-5 h-5 rounded accent-[#483eff] !outline-0"
                id={index}
                onChange={(e) => checboxActive(e)}
              />
              <div className="flex flex-col justify-start">
                <span className="text-lg xl:text-base  text-DarkBlue">{item.title}</span>
                <p className="text-sm xl:text-xs  text-lightGray">{item.desc}</p>
              </div>
            </div>
           
            

              <span className="text-sm xl:text-xs text-DarkBlue">+${yearlyPlan ? item.perYear :item.perMonth}/{yearlyPlan ? "yr" : "mo"}</span>
            
          </div>
        );
      })}
    </div>
  );
}
