'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Mail, Phone, User } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import Stepper from '@/components/stepper/stepper';

type UserInputs = {
  name: string;
  email: string;
  phone: string;
};

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();

  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    dispatch(setUser(data));
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          <div className="mb-2 flex flex-col">
            <p className="mb-1 font-semibold">Name</p>
            <div className="flex flex-row items-center">
              <input
                placeholder="name"
                {...register('name', { required: true })}
                className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
              />
              <User />
            </div>
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-2 flex flex-col">
            <p className="mb-1 font-semibold">Email</p>
            <div className="flex flex-row items-center">
              <input
                placeholder="email"
                {...register('email', { required: true })}
                className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
              />
              <Mail />
            </div>
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-2 flex flex-col">
            <p className="mb-1 font-semibold">Phone</p>
            <div className="flex flex-row items-center">
              <input
                placeholder="phone"
                {...register('phone', { required: true })}
                className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
              />
              <Phone />
            </div>
            {errors.phone && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
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
          {/* <input
            type="submit"
            value="Next"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-white duration-100 hover:cursor-pointer hover:bg-emerald-700"
          /> */}
        </form>
      </div>
    </div>
  );
};

export default HomeModule;
