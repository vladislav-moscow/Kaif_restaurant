'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert('Пароли не совпадают');
    }

    try {
      const res = await axios.post('http://localhost:3001/user', data);

      if (res.status === 201) {
        router.push('/');
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/4 border-2 border-solid border-white p-5'>
        <h2 className='text-slate-200 font-bold text-2xl mb-4 text-center'>
          Регистрация
        </h2>

        <label htmlFor='username' className='text-slate-500 mb-2 block text-sm'>
          Username:
        </label>
        <input
          type='text'
          {...register('username', {
            required: 'Имя пользователя не введено',
          })}
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
          placeholder='Имя пользователя'
        />
        {errors.username && (
          <span className='text-red-500 text-xs'>{errors.username.message}</span>
        )}

        <label htmlFor='email' className='text-slate-500 mb-2 block text-sm'>
          Email:
        </label>
        <input
          type='email'
          {...register('email', {
            required: 'Электронная почта не введена',
          })}
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
          placeholder='Ваш e-mail'
        />
        {errors.email && (
          <span className='text-red-500 text-xs'>{errors.email.message}</span>
        )}

        <label htmlFor='password' className='text-slate-500 mb-2 block text-sm'>
          Password:
        </label>
        <input
          type='password'
          {...register('password', {
            required: 'Пароль не введен',
          })}
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
          placeholder='********'
        />
        {errors.password && (
          <span className='text-red-500 text-sm'>{errors.password.message}</span>
        )}

        <label htmlFor='confirmPassword' className='text-slate-500 mb-2 block text-sm'>
          Confirm Password:
        </label>
        <input
          type='password'
          {...register('confirmPassword', {
            required: 'Пароль не введен',
          })}
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
          placeholder='********'
        />
        {errors.confirmPassword && (
          <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>
        )}

        <button type='submit' className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'>
          Регистрация
        </button>
        <span className='cursor-pointer text-white block mt-4'>
          У вас уже есть аккаунт? <Link href='/auth/login'>ВОЙТИ</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;