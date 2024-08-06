'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import Stepper from '@/components/stepper/stepper';
import UserInfoForm from '@/components/form/userInfo';
import EducationForm from '@/components/form/education';
import WorkingExperienceForm from '@/components/form/working';
import ProjectForm from '@/components/form/project';
import SkillForm from '@/components/form/skill';
import { RootState } from '@/store/store';
import Review from '@/components/form/review';

interface step {
  id: number;
  label: string;
}

const steps: step[] = [
  { id: 1, label: 'User Information' },
  { id: 2, label: 'Education' },
  { id: 3, label: 'Working Experience' },
  { id: 4, label: 'Projects' },
  { id: 5, label: 'Skills' },
  { id: 6, label: 'Review' },
];

const HomeModule: React.FC = () => {
  const currentStep = useSelector((state: RootState) => state.step.step);
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <UserInfoForm />;
      case 2:
        return <EducationForm />;
      case 3:
        return <WorkingExperienceForm />;
      case 4:
        return <ProjectForm />;
      case 5:
        return <SkillForm />;
      case 6:
        return <Review />;
      default:
        return <UserInfoForm />;
    }
  };

  return (
    <div className="my-20 flex w-screen items-center justify-center">
      <div className="flex w-3/5 flex-col gap-3 rounded-md border-2 border-slate-500 p-5">
        <Stepper steps={steps} />
        <h1 className="text-center text-2xl font-bold">
          {steps.find((step) => step.id === currentStep)?.label}
        </h1>
        {renderStepContent()}
      </div>
    </div>
  );
};

export default HomeModule;
