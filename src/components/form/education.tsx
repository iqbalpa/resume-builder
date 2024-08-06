import React, { useState } from 'react';
import StepButton from '../buttons/button';
import { useFieldArray, useForm } from 'react-hook-form';
import {
  Calendar,
  CalendarRange,
  Laptop,
  Plus,
  Trash2,
  University,
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addEducation } from '@/store/userSlice';

type EducationInputs = {
  educations: {
    univ: string;
    year: number;
    major: string;
    startTime: string;
    endTime: string;
  }[];
};

const EducationForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    control,
    register,
    getValues,
    formState: { errors },
  } = useForm<EducationInputs>({
    defaultValues: {
      educations: [
        {
          univ: '',
          year: new Date().getFullYear(),
          major: '',
          startTime: '',
          endTime: '',
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'educations',
  });
  const saveEducation = (data: EducationInputs) => {
    data.educations.forEach((education) => dispatch(addEducation(education)));
  };

  return (
    <form className="flex w-full flex-col">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="mb-4 flex flex-row items-center gap-3 rounded-lg border-[1px] border-slate-500 p-4"
        >
          <button
            onClick={() => remove(index)}
            className="rounded-lg border-[1px] border-red-400 bg-red-300 p-2 duration-100 hover:cursor-pointer hover:bg-red-400"
          >
            <Trash2 />
          </button>
          <div className="flex grow flex-col">
            <div className="mb-2 flex flex-col">
              <p className="mb-1 font-semibold">University</p>
              <div className="flex flex-row items-center">
                <input
                  placeholder="University"
                  {...register(`educations.${index}.univ`, { required: true })}
                  className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
                />
                <University />
              </div>
              {errors.educations?.[index]?.univ && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2 flex flex-col">
              <p className="mb-1 font-semibold">Year</p>
              <div className="flex flex-row items-center">
                <input
                  type="number"
                  placeholder="Year"
                  {...register(`educations.${index}.year`, { required: true })}
                  className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
                />
                <Calendar />
              </div>
              {errors.educations?.[index]?.year && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2 flex flex-col">
              <p className="mb-1 font-semibold">Major</p>
              <div className="flex flex-row items-center">
                <input
                  placeholder="Major"
                  {...register(`educations.${index}.major`, { required: true })}
                  className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
                />
                <Laptop />
              </div>
              {errors.educations?.[index]?.major && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2 flex flex-col">
              <div className="flex grow flex-row">
                <div className="flex grow flex-col">
                  <p className="mb-1 font-semibold">Start Time</p>
                  <div className="flex items-center">
                    <input
                      placeholder="mm/yyyy"
                      {...register(`educations.${index}.startTime`, {
                        required: true,
                      })}
                      className="grow rounded-md border-[1px] border-slate-400 px-4 py-2"
                    />
                  </div>
                  {errors.educations?.[index]?.startTime && (
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
                      {...register(`educations.${index}.endTime`, {
                        required: true,
                      })}
                      className="grow rounded-md border-[1px] border-slate-400 px-4 py-2"
                    />
                    <CalendarRange className="ml-2" />
                  </div>
                  {errors.educations?.[index]?.endTime && (
                    <span className="ml-2 text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 flex items-center justify-center">
        <button
          type="button"
          onClick={() =>
            append({
              univ: '',
              year: new Date().getFullYear(),
              major: '',
              startTime: '',
              endTime: '',
            })
          }
          className="flex flex-row items-center justify-center gap-2 rounded-xl border-[1px] border-slate-400 bg-slate-300 px-6 py-4 font-bold shadow-lg duration-150 hover:scale-105 hover:cursor-pointer hover:bg-slate-400"
        >
          <Plus />
          <p>Add Education</p>
        </button>
      </div>
      <StepButton saveState={saveEducation} getValues={getValues} />
    </form>
  );
};

export default EducationForm;
