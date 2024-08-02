import React from 'react';

const Stepper: React.FC = () => {
  return (
    <ul className="steps">
      <li className="step step-primary">Register</li>
      <li className="step">Choose plan</li>
      <li className="step">Purchase</li>
      <li className="step">Receive Product</li>
    </ul>
  );
};

export default Stepper;
