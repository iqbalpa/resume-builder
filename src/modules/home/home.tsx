'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';
import { setEducation, setUser } from '@/store/userSlice';
import Stepper from '@/components/stepper/stepper';
import UserInfoForm from '@/components/form/userInfo';
import EducationForm from '@/components/form/education';
import WorkingExperienceForm from '@/components/form/working';
import ProjectForm from '@/components/form/project';
import SkillForm from '@/components/form/skill';

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
];

const HomeModule: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  useEffect(() => {
    document
      .getElementById(currentStep.toString())
      ?.classList.add('step-primary');
  }, [currentStep]);

  const dispatch = useDispatch();

  const nextStep = () => {
    setCurrentStep((prev) => {
      const newStep = prev === 5 ? 5 : prev + 1;
      document
        .getElementById(newStep.toString())
        ?.classList.add('step-primary');
      return newStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => {
      document
        .getElementById(prev.toString())
        ?.classList.remove('step-primary');
      return prev === 1 ? 1 : prev - 1;
    });
  };

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
      default:
        return <UserInfoForm />;
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-3/5 flex-col gap-3 rounded-md border-2 border-slate-500 p-5">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <h1 className="text-center text-2xl font-bold">
          {steps.find((step) => step.id === currentStep)?.label}
        </h1>

        {renderStepContent()}

        <div className="mt-4 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="rounded-lg bg-gray-500 px-4 py-2 text-white duration-100 hover:cursor-pointer hover:bg-gray-700 disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={currentStep === 5}
            className="rounded-lg bg-emerald-500 px-4 py-2 text-white duration-100 hover:cursor-pointer hover:bg-emerald-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeModule;
