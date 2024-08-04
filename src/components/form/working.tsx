import React from 'react';
import StepButton from '../buttons/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const WorkingExperienceForm: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>working experience</h1>
      <StepButton saveState={() => {}} getValues={() => {}} />
    </div>
  );
};

export default WorkingExperienceForm;
