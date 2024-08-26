import React, { createContext, useContext, useState, useEffect } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(() => {
    const storedDate = localStorage.getItem('startDate');
    return storedDate ? new Date(storedDate) : new Date(2024, 7, 26);
  });

  useEffect(() => {
    localStorage.setItem('startDate', startDate.toISOString());
  }, [startDate]);

  const resetStartDate = () => {
    setStartDate(new Date());
  };

  return (
    <DateContext.Provider value={{ startDate, resetStartDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
