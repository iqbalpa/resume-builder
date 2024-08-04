import React from 'react';
import StepButton from '../buttons/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Review: React.FC = () => {
  const resume = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1>review</h1>
      <p>{JSON.stringify(resume)}</p>
      <StepButton saveState={() => {}} getValues={() => {}} />
    </div>
  );
};

export default Review;
