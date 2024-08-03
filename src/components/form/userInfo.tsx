import React from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import StepButton from '../buttons/button';

type UserInputs = {
  name: string;
  email: string;
  phone: string;
};

const UserInfoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();

  return (
    <form className="flex w-full flex-col">
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
          <span className="text-sm text-red-500">This field is required</span>
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
          <span className="text-sm text-red-500">This field is required</span>
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
          <span className="text-sm text-red-500">This field is required</span>
        )}
      </div>
      <StepButton />
    </form>
  );
};

export default UserInfoForm;
