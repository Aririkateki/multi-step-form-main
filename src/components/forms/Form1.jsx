import React from "react";
import { useState } from "react";

export default function Form1({ showErrors, onChangeHandler }) {
  return (
    <form className="my-10 flex flex-col gap-4 ">
      <div className="flex justify-between items-center">
        <span className="text-DarkBlue">Name</span>
        {showErrors.family ? (
          <span className="text-[#d44b64]">This field is required</span>
        ) : (
          ""
        )}
      </div>

      <input
        type="text"
        name="family"
        className={`${
          showErrors.family && "border-[#d44b64]"
        } border border-lightGray rounded-md p-3`}
        placeholder="e.g. Stephen King"
        onChange={(e) => onChangeHandler(e)}
      />

      <div className="flex justify-between items-center">
        <span className="text-DarkBlue">Email Adress</span>
        {showErrors.email ? (
          <span className="text-[#d44b64]">This field is required</span>
        ) : (
          ""
        )}
      </div>

      <input
        type="email"
        name="email"
        className={`${
          showErrors.email && "border-[#d44b64]"
        } border border-lightGray rounded-md p-3`}
        placeholder="e.g. StephenKing@lorem.com"
        onChange={(e) => onChangeHandler(e)}
      />

      <div className="flex justify-between items-center">
        <span className="text-DarkBlue">Phone Number</span>
        {showErrors.phoneNumber ? (
          <span className="text-[#d44b64]">This field is required</span>
        ) : (
          ""
        )}
      </div>

      <input
        type="tel"
        name="phoneNumber"
        className={`${
          showErrors.phoneNumber && "border-[#d44b64]"
        } border border-lightGray rounded-md p-3`}
        placeholder="e.g. +1 234 567 890"
        onChange={(e) => onChangeHandler(e)}
      />
    </form>
  );
}
