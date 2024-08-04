import { nextStep, prevStep } from '@/store/stepSlice';
import { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IStepButton {
  getValues: () => any;
  saveState: (data: any) => void;
}

const StepButton: React.FC<IStepButton> = ({ getValues, saveState }) => {
  const currentStep = useSelector((state: RootState) => state.step.step);
  const dispatch = useDispatch();

  const handleNext = () => {
    const values = getValues();
    saveState(values);
    dispatch(nextStep());
  };
  const handlePrev = () => {
    dispatch(prevStep());
  };

  return (
    <div className="mt-4 flex justify-between">
      <button
        type="button"
        onClick={handlePrev}
        className={`rounded-lg px-4 py-2 text-white duration-100  ${currentStep === 1 ? 'bg-gray-400 hover:cursor-not-allowed hover:bg-gray-400' : 'bg-gray-500 hover:cursor-pointer hover:bg-gray-700'}`}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => handleNext()}
        className={`rounded-lg  px-4 py-2 text-white duration-100 ${currentStep === 6 ? 'bg-emerald-300 hover:cursor-not-allowed hover:bg-emerald-300' : 'bg-emerald-500 hover:cursor-pointer hover:bg-emerald-700'}`}
      >
        Next
      </button>
    </div>
  );
};

export default StepButton;
