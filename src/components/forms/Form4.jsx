import React from "react";
import { Link } from "react-router-dom";
import { pickAddFormText } from "../../variables/forms";

export default function Form4({
  activeplan,
  yearlyPlan,
  setStep,
  otherFeature,
}) {
  let planPrice = 0;
  let totalPrice = 0;
  if (yearlyPlan) {
    switch (activeplan) {
      case 1:
        planPrice = 90;
        break;
      case 2:
        planPrice = 90;
        break;
      case 3:
        planPrice = 90;
        break;
      default:
        break;
    }
  } else {
    switch (activeplan) {
      case 1:
        planPrice = 9;
        break;
      case 2:
        planPrice = 12;
        break;
      case 3:
        planPrice = 9;
        break;
      default:
        break;
    }
  }
  return (
    <div className="my-10">
      <div className=" bg-mainbg rounded-md p-5 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <span className="text-DarkBlue">
              {activeplan === 1
                ? "Arcade"
                : activeplan === 2
                ? "Advanced"
                : activeplan === 3 && "Pro"}
              ({yearlyPlan ? "Yearly" : "Monthly"})
            </span>
            <span
              className="text-lightGray underline decoration-2 decoration-[#9999a3] cursor-pointer"
              onClick={() => setStep(1)}
            >
              Change
            </span>
          </div>
          <span className="text-DarkBlue">
            {planPrice}/{yearlyPlan ? "yr" : "mo"}
          </span>
        </div>
        <div className="w-full bg-[#eaebf0] h-[2px] rounded-lg mx-auto"></div>

        {otherFeature !== [] &&
          otherFeature.map((item) => {
            totalPrice = planPrice;
            if (yearlyPlan) {
              totalPrice += +pickAddFormText[item].perYear;
            } else {
              totalPrice += +pickAddFormText[item].perMonth;
            }
            return (
              <div className="flex justify-between">
                <span className="text-lightGray">
                  {pickAddFormText[item].title}
                </span>
                <span className="text-DarkBlue">
                +$ {yearlyPlan
                    ? pickAddFormText[item].perYear
                    : pickAddFormText[item].perMonth}/{yearlyPlan ? "yr" : "mo"}
                </span>
              </div>
            );
          })}
      </div>
      <div className="mt-7 flex justify-between px-6 pb-10">
        <span className="text-lightGray">Total({yearlyPlan ? "Per year" : "Per month"})</span>
        <span className="text-[#4f3ff1] font-bold text-xl">{totalPrice}/{yearlyPlan ? "yr" : "mo"}</span>
      </div>
    </div>
  );
}
