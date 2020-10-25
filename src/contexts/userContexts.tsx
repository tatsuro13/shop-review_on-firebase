import { createContext } from 'react';
import { User } from '../types/user';

type UserContextValue = {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const UserConText = createContext<UserContextValue>({
    user: null,
    setUser: () => {}
})