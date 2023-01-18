import React from "react";
import Thankyouimg from "../../assets/images/icon-thank-you.svg";
export default function ThankForm() {
  return (
    <div className="justify-center xl:items-center flex flex-col gap-6  items-center animate-slideFromRight">
      <img src={Thankyouimg} alt="Thankyouimg" />
      <span className="text-4xl text-DarkBlue font-bold">Thank you!</span>
      <div className="text-lightGray text-center flex flex-col justify-center">
        <span className="text-lg !font-thin leading-7">Thanks for confirming subscription!We hope you have</span>
        <span className="text-lg !font-thin leading-7">fun with our platform.If you need suport,please feel</span>
        <span className="text-lg !font-thin leading-7">free to email us at funyplatform@example.com</span>
      </div>
    </div>
  );
}
