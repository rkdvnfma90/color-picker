import { CustomPicker } from 'react-color';
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

function MyPicker({ hsl, hsv, onChange }) {
  return (
    <>
      <SaturationWrapper>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </SaturationWrapper>
      <HueWrapper>
        <Hue hsl={hsl} hsv={hsv} onChange={onChange} />
      </HueWrapper>
      <EditableInputWrapper>
        <EditableInput />
      </EditableInputWrapper>
    </>
  );
}

export default CustomPicker(MyPicker);
