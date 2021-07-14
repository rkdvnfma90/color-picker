import { useContext } from 'react';
import { CustomPicker } from 'react-color';
import { ColorContext } from '../../contexts/colorContext';
import {
  HueWrapper,
  SaturationWrapper,
  EditableInputWrapper,
} from './styles/MyPickerStyles';
import {
  Saturation,
  Hue,
  EditableInput,
} from 'react-color/lib/components/common';

function MyPicker({ hsl, hsv, hex, onChange }) {
  const { selectedColor } = useContext(ColorContext);

  return (
    <>
      <SaturationWrapper>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </SaturationWrapper>
      <HueWrapper>
        <Hue hsl={hsl} onChange={onChange} />
      </HueWrapper>
      <EditableInputWrapper>
        <EditableInput value={selectedColor.hex} onChange={onChange} />
      </EditableInputWrapper>
    </>
  );
}

export default CustomPicker(MyPicker);
