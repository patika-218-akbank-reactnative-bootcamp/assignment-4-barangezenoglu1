import React from 'react';

export const ActiveUserContext = React.createContext({
  activeUser: null,
  setActiveUser: () => {},
});
