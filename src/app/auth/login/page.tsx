'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '@/context/UserContext';

interface SignInFormInputs {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const router = useRouter();
  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      const res = await axios.get('http://localhost:3001/user');

      const user = res.data.find(
        (user: { email: string; password: string }) =>
          user.email === data.email && user.password === data.password
      );

      if (user) {
        console.log('Вход выполнен успешно', user);
        setUser(user); // Сохраняем пользователя в контексте
        router.push('/');
      } else {
        alert('Неверный email или пароль');
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-1/4 border-2 border-solid border-white p-5'>
        <h2 className='text-slate-200 font-bold text-2xl mb-4 text-center'>
          Вход
        </h2>
        <label htmlFor='email' className='text-slate-500 mb-2 block text-sm'>
          Email:
        </label>
        <input
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Электронная почта не введена',
            },
          })}
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
          placeholder='Ваш e-mail'
        />
        {errors.email && (
          <span className='text-red-500 text-xs'>{errors.email.message}</span>
        )}
        <label htmlFor='password' className='text-slate-500 mb-2 block text-sm'>
          Пароль:
        </label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Пароль не введен',
            },
          })}
          className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full'
          placeholder='********'
        />
        {errors.password && (
          <span className='text-red-500 text-xs'>
            {errors.password.message}
          </span>
        )}
        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-3 rounded-lg mt-2'
        >
          Вход
        </button>
        <span className='cursor-pointer text-white block mt-4'>
          У вас еще нет аккаунта?{' '}
          <Link href='/auth/register'>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
        </span>
      </form>
    </div>
  );
};

export default SignInForm;