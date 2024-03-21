import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Form1 from "../components/Appinterface Form/Form1";
import Form2 from "../components/Appinterface Form/Form2";
import Form3 from "../components/Appinterface Form/Form3";
import Form4 from "../components/Appinterface Form/Form4";
import Form5 from "../components/Appinterface Form/Form5";
import Form6 from "../components/Appinterface Form/Form6";
import Form7 from "../components/Appinterface Form/Form7";

const AppInterface = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" pt-24">
        <form onSubmit={handleSubmit} className=" bg-white rounded-2xl">
          {step === 1 && <Form1 />}
          {step === 2 && <Form2 />}
          {step === 3 && <Form3 />}
          {step === 4 && <Form4 />}
          {step === 5 && <Form5 />}
          {step === 6 && <Form6 />}
          {step === 7 && <Form7 />}
          <div className=" flex justify-center gap-10 pb-6">
            {step > 1 && (
              <button
                className="bg-white text-black text-xl rounded-lg shadow-md px-4 py-1"
                type="button"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            {step < 7 && (
              <button
                className="bg-black text-white text-xl rounded-lg shadow-md px-4 py-1"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {step === 7 && <button type="submit">Submit</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppInterface;
