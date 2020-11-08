import React, { useEffect, useState } from 'react';
import { ReviewsContext } from './src/contexts/reviewsContext';
import { UserConText } from './src/contexts/userContexts';
import { AppNavigator } from './src/navigation/AppNavigator';
import { Review } from './src/types/review';
import { User } from './src/types/user';

export default function App() {
  const [user, setUser] = useState<User>();
  const [reviews, setReviews] = useState<Review[]>([]);
  
  return (
    <UserConText.Provider value={{user, setUser}}>
       <ReviewsContext.Provider value={{reviews, setReviews}}>
      <AppNavigator />
      </ReviewsContext.Provider>
    </UserConText.Provider>
  );
}

