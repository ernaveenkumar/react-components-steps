import { useState } from 'react';
export const HomePage = () => {
  const messages = ['Learn React', 'Apply for Jobs', 'Invest your new income'];
  const [step, setStep] = useState(1);

  function handlePreviousClick() {
    if (step > 0) setStep(step - 1);
  }
  function handleNextClick() {
    if (step <= 2) setStep(step + 1);
  }

  return (
    <>
      <div className="steps w-1/2 mx-auto min-h-80 bg-slate-50 flex flex-col ">
        <div className="flex justify-center gap-8 mt-10">
          <div
            className={`px-4 py-2 rounded-full ${
              step >= 1 ? 'bg-blue-500' : 'bg-slate-200'
            }`}
          >
            1
          </div>
          <div
            className={`px-4 py-2  text-orange-700 rounded-full ${
              step >= 2 ? 'bg-blue-500' : 'bg-slate-200'
            }`}
          >
            2
          </div>
          <div
            className={`px-4 py-2 bg-blue-500 rounded-full ${
              step >= 3 ? 'bg-blue-500' : 'bg-slate-200'
            }`}
          >
            3
          </div>
        </div>

        <div className="font-semibold font-serif text-lg w-4/5 h-40 mt-5 message self-center bg-slate-100 rounded-md ">
          {step != 0
            ? `${messages[step - 1]}`
            : 'Please press next to see steps.'}
        </div>
        <div className="buttons mt-5 flex flex-row justify-center gap-8 pb-10">
          <button
            className="px-8 py-2 rounded-full"
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
            onClick={() => handlePreviousClick()}
          >
            Previous
          </button>
          <button
            className="px-8 py-2 rounded-full"
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
            onClick={() => handleNextClick()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
