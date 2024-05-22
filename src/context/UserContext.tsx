'use client';
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, FC } from 'react';

// Определение интерфейса для объекта пользователя
interface User {
  id: string;
  username: string;
  email: string;
  // Добавьте другие свойства по мере необходимости
}

// Интерфейс для значения контекста пользователя
interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  logout: () => void;
}

// Интерфейс для свойств компонента UserProvider
interface UserProviderProps {
  children: React.ReactNode;
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
  logout: () => {}
};

const UserContext = createContext<UserContextType>(defaultUserContext);

const UserProvider: FC<UserProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const logout = () => {
			setUser(null);
	};

	return (
			<UserContext.Provider value={{ user, setUser, logout }}>
					{children}
			</UserContext.Provider>
	);
};

const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser должен использоваться внутри UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
