import React, {useState} from 'react';
import {ActiveUserContext} from './ActiveUserContext';

export const ActiveUserProvider = ({children}) => {
  const [activeUser, setActiveUser] = useState({
    userName: '',
    userPassword: '',
  });
  return (
    <ActiveUserContext.Provider
      value={{
        activeUser,
        setActiveUser,
      }}>
      {children}
    </ActiveUserContext.Provider>
  );
};
