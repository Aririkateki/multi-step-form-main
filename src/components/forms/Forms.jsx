import React, { useState } from "react";
import { formsDesc, formsTitle } from "../../variables/forms";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import ThankForm from "./ThankForm";

export default function Forms({ step, setStep }) {
  //form 1
  const [form1Content, setForm1Content] = useState({
    family: "",
    email: "",
    phoneNumber: "",
  });

  const onChangeHandler = (e) => {
    setForm1Content({ ...form1Content, [e.target.name]: e.target.value });
  };
  const [showErrors, setShowErrors] = useState({
    family: false,
    email: false,
    phoneNumber: false,
  });

  const checkReqierdValue = (form1Content) => {
    if (form1Content.family === "") {
      setShowErrors({ ...showErrors, family: true });
    }
    if (form1Content.email === "") {
      setShowErrors({ ...showErrors, email: true });
    }
    if (form1Content.phoneNumber === "") {
      setShowErrors({ ...showErrors, phoneNumber: true });
    } else {
      setShowErrors({});
      setStep((prevStep) => prevStep + 1);
    }
  };

  //---------------------------------------------
  //form2
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const [activeplan, setActiveplan] = useState(1);
  // form3
  const [otherFeature, setotherFeature] = useState([]);
  const btnHandler = () => {
    if (step === 0) {
      checkReqierdValue(form1Content);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const backBtnHandler = () => {
    if (step === 3) {
      setotherFeature([]);
    }
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className={`pt-16 pb-5  xl:w-11/12 ${step===4 && "xl:pb-16 "}`}>
      <h1 className="text-3xl md:text-2xl font-bold text-DarkBlue leading-10">
        {formsTitle[step]}
      </h1>
      <p className="text-lg  md:text-base md:mt-2  font-thin text-lightGray leading-10">
        {formsDesc[step]}
      </p>
      {step === 0 ? (
        // form1
        <Form1
          showErrors={showErrors}
          onChangeHandler={onChangeHandler}
          form1Content={form1Content}
        />
      ) : step === 1 ? (
        //form2
        <Form2
          activeplan={activeplan}
          setActiveplan={setActiveplan}
          setYearlyPlan={setYearlyPlan}
          yearlyPlan={yearlyPlan}
        />
      ) : step === 2 ? (
        <Form3
          yearlyPlan={yearlyPlan}
          activeplan={otherFeature}
          setActiveplan={setotherFeature}
        />
      ) : step === 3 ? (
        <Form4
          activeplan={activeplan}
          yearlyPlan={yearlyPlan}
          setStep={setStep}
          otherFeature={otherFeature}
        />
      ) : (
        <ThankForm />
      )}
      {step !== 4 && (
        <div
          className={`flex xl:absolute xl:w-11/12  ${
            step !== 0 ? "justify-between" : "justify-end"
          } mt-20`}
        >
          {step !== 0 && (
            <button
              type="submit"
              className=" text-lightGray px-5 py-3 rounded-lg hover:text-DarkBlue transition-all xl:justify-self-start "
              onClick={backBtnHandler}
            >
              Go Back
            </button>
          )}
          <button
            type="submit"
            className={`bg-DarkBlue text-white px-7 py-3 rounded-lg xl:justify-self-end hover:bg-LightBlue transition-all ${
              step === 3 && "bg-LightBlue"
            }`}
            onClick={btnHandler}
          >
            {step === 3 ? "Confirm" : "Next Step"}
          </button>
        </div>
      )}
    </div>
  );
}
