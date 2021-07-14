import { useContext } from 'react';
import { CustomPicker } from 'react-color';
import { ColorContext } from '../../contexts/colorContext';
import {
  HueWrapper,
  AlphaWrapper,
  SaturationWrapper,
  EditableInputWrapper,
} from './styles/MyPickerStyles';
import {
  Saturation,
  Hue,
  Alpha,
  EditableInput,
} from 'react-color/lib/components/common';

function MyPicker({ hsl, hsv, rgb, hex, onChange }) {
  return (
    <>
      <SaturationWrapper>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </SaturationWrapper>
      <HueWrapper>
        <Hue hsl={hsl} onChange={onChange} />
      </HueWrapper>
      <AlphaWrapper>
        <Alpha hsl={hsl} rgb={rgb} onChange={onChange} />
      </AlphaWrapper>
      <EditableInputWrapper>
        <EditableInput value={hex} onChange={onChange} />
      </EditableInputWrapper>
    </>
  );
}

export default CustomPicker(MyPicker);
