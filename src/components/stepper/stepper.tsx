import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

interface IStepper {
  steps: { id: number; label: string }[];
}

const Stepper: React.FC<IStepper> = ({ steps }) => {
  const currentStep = useSelector((state: RootState) => state.step.step);
  const visitedSteps = useSelector(
    (state: RootState) => state.step.visitedSteps,
  );

  return (
    <ul className="steps">
      {steps.map((step) => (
        <li
          key={step.id}
          id={step.id.toString()}
          className={`step ${visitedSteps.includes(step.id) ? 'step-primary' : ''}`}
        >
          {step.label}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
