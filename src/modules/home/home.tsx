'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Mail, Phone, User } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setUser } from '@/store/userSlice';

type UserInputs = {
  name: string;
  email: string;
  phone: string;
};

const HomeModule: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();
  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    console.log(data);
    dispatch(setUser(data));
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-3/5 flex-col gap-3 rounded-md bg-sky-300 p-5">
        <h1 className="text-center text-2xl font-bold">User Information</h1>
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
          <input
            type="submit"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-white duration-100 hover:cursor-pointer hover:bg-emerald-700"
          />
        </form>
      </div>
    </div>
  );
};

export default HomeModule;
