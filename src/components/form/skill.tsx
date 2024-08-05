import React from 'react';
import StepButton from '../buttons/button';
import { Type, Text } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setSkill } from '@/store/userSlice';

type SkillInputs = {
  title: string;
  description: string;
};

const SkillForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<SkillInputs>();
  const saveSkill = (data: SkillInputs) => {
    dispatch(setSkill(data));
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
      <StepButton saveState={saveSkill} getValues={getValues} />
    </form>
  );
};

export default SkillForm;
