import React from 'react';
import { MainWrapper, MainTitle } from './styles/MainStyles';
import ColorPicker from '../ColorPicker/ColorPicker';

function Main() {
  return (
    <MainWrapper>
      <MainTitle>Color Picker</MainTitle>

      <ColorPicker />
    </MainWrapper>
  );
}

export default Main;
