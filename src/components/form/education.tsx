import React from 'react';
import StepButton from '../buttons/button';
import { useForm } from 'react-hook-form';
import { Calendar, CalendarRange, Laptop, University } from 'lucide-react';

type EducationInputs = {
  univ: string;
  year: number;
  major: string;
  startTime: string;
  endTime: string;
};

const EducationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationInputs>();

  return (
    <form className="flex w-full flex-col">
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">University</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="University"
            {...register('univ', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <University />
        </div>
        {errors.univ && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Year</p>
        <div className="flex flex-row items-center">
          <input
            type="number"
            placeholder="Year"
            {...register('year', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Calendar />
        </div>
        {errors.year && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Major</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="Major"
            {...register('major', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Laptop />
        </div>
        {errors.major && (
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
      <StepButton />
    </form>
  );
};

export default EducationForm;
