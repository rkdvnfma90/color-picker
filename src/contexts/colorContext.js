import { createContext, useState } from 'react';

const initialColorState = {
  hex: '#000000',
  rgb: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
};

const initialState = {
  selectedColor: initialColorState,
  setSelectedColor: () => {},
};

const ColorContext = createContext(initialState);

const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(initialColorState);

  const value = {
    selectedColor,
    setSelectedColor,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
