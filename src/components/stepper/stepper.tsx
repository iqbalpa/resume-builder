import React from 'react';

interface IStepper {
  steps: { id: number; label: string }[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const Stepper: React.FC<IStepper> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <ul className="steps">
      {steps.map((step) => (
        <li key={step.id} id={step.id.toString()} className="step">
          {step.label}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
