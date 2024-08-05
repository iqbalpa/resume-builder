import React from 'react';
import StepButton from '../buttons/button';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Laptop, Text, Type } from 'lucide-react';
import { setProject } from '@/store/userSlice';

type ProjectInputs = {
  title: string;
  stack: string;
  description: string;
};

const ProjectForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<ProjectInputs>();
  const saveProject = (data: ProjectInputs) => {
    dispatch(setProject(data));
  };

  return (
    <form className="flex w-full flex-col">
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Title</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="title"
            {...register('title', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Type />
        </div>
        {errors.title && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-2 flex flex-col">
        <p className="mb-1 font-semibold">Tech Stack</p>
        <div className="flex flex-row items-center">
          <input
            placeholder="stack"
            {...register('stack', { required: true })}
            className="mr-2 grow rounded-md border-[1px] border-slate-400 px-4 py-2"
          />
          <Laptop />
        </div>
        {errors.stack && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
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
        {errors.description && (
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <StepButton saveState={saveProject} getValues={getValues} />
    </form>
  );
};

export default ProjectForm;
