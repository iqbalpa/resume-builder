import React from 'react';
import StepButton from '../buttons/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useForm } from 'react-hook-form';
import { Briefcase, Building2, CalendarRange, Text } from 'lucide-react';
import { setExperience } from '@/store/userSlice';

type ExperienceInputs = {
  company: string;
  role: string;
  startTime: string;
  endTime: string;
  description: string;
};

const WorkingExperienceForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<ExperienceInputs>();
  const saveExperience = (data: ExperienceInputs) => {
    dispatch(setExperience(data));
  };

  return (
    <form className="flex w-full flex-col">
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Company</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="company"
            {...register('company', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Building2 />
        </div>
        {errors.company && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Role</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="role"
            {...register('role', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Briefcase />
        </div>
        {errors.role && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-2 flex flex-col">
        <div className="flex grow flex-row">
          <div className="flex grow flex-col">
            <p className="mb-1 font-semibold">Start Time</p>
            <div className="flex items-center">
              <input
                placeholder="mm/yyyy"
                {...register('startTime', { required: true })}
                className="grow rounded-md border-[1px] border-slate-400 px-4 py-2"
              />
            </div>
            {errors.startTime && (
              <span className="ml-2 text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="ml-4 flex grow flex-col">
            <p className="mb-1 font-semibold">End Time</p>
            <div className="flex items-center">
              <input
                placeholder="mm/yyyy"
                {...register('endTime', { required: true })}
                className="grow rounded-md border-[1px] border-slate-400 px-4 py-2"
              />
              <CalendarRange className="ml-2" />
            </div>
            {errors.endTime && (
              <span className="ml-2 text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Description</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="description"
            {...register('description', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Text />
        </div>
        {errors.role && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <StepButton saveState={saveExperience} getValues={getValues} />
    </form>
  );
};

export default WorkingExperienceForm;
