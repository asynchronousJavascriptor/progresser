import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [elem, setElem] = useState({
    name: "",
    email: "",
    city: "",
    zipCode: "",
  });

  const [step, setStep] = useState(1);
  const update = (data) => {
    setElem((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <div className="w-full h-screen text-zinc-400 p-20 bg-zinc-900">
      <div className="mb-10">
        <div className="flex w-full gap-5 h-1 bg-transparent">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              className={`w-1/3 h-full ${i <= step - 1 ? "bg-green-600" : "bg-zinc-800"}`}
            ></div>
          ))}
        </div>
      </div>
      {step === 1 && (
        <Step1
          data={elem}
          update={update}
          handleNext={() => setStep(step + 1)}
        />
      )}
      {step === 2 && (
        <Step2
          data={elem}
          update={update}
          handleNext={() => setStep(step + 1)}
          handlePrev={() => setStep(step - 1)}
        />
      )}
      {step === 3 && <Step3 data={elem} handlePrev={() => setStep(step - 1)} />}
    </div>
  );
}

export default App;
