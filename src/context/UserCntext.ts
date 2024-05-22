'use client';
import { createContext, useContext, useState, ReactNode, FC, Dispatch, SetStateAction } from 'react';

interface User {
	// Здесь можно определить свойства объекта пользователя, например:
	id: number;
	username: string;
	email: string;
	password: string;
}

interface UserContextValue {
	user: User | null;
	setUser: Dispatch<SetStateAction<User | null>>;
	logout: () => void;
}

// Создание контекста с начальным значением undefined
const UserContext = createContext<UserContextValue | undefined>(undefined);

// Интерфейс для свойств компонента UserProvider
interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
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

export const useUser = (): UserContextValue => {
	const context = useContext(UserContext);
	if (context === undefined) {
			throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};
