import React, { useEffect, useState } from 'react';
import { UserConText } from './src/contexts/userContexts';
import { AppNavigator } from './src/navigation/AppNavigator';
import { User } from './src/types/user';

export default function App() {
  const [user, setUser] = useState<User>();
  
  return (
    <UserConText.Provider value={{user, setUser}}>
      <AppNavigator />
    </UserConText.Provider>
  );
}

