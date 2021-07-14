import { CustomPicker } from 'react-color';
import {
  HueWrapper,
  AlphaWrapper,
  SaturationWrapper,
  EditableInputWrapper,
  RgbaWrapper,
  RgbaInput,
  Label,
  LabelInputWrapper,
  CopyButtonWrapper,
  CopyButton,
} from './styles/MyPickerStyles';
import { getContrastColorByHex } from '../../utils/functions';
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

      <RgbaWrapper>
        <LabelInputWrapper>
          <Label htmlFor='red'>R</Label>
          <RgbaInput id='red' value={rgb.r} disabled />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label htmlFor='green'>G</Label>
          <RgbaInput id='green' value={rgb.g} disabled />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label htmlFor='blue'>B</Label>
          <RgbaInput id='blue' value={rgb.b} disabled />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label htmlFor='alpha'>A</Label>
          <RgbaInput id='alpha' value={rgb.a} disabled />
        </LabelInputWrapper>
      </RgbaWrapper>

      <CopyButtonWrapper>
        <CopyButton
          type='button'
          fontColor={getContrastColorByHex(hex)}
          backgroundColor={hex}
        >
          HEX Copy!
        </CopyButton>
        <CopyButton
          type='button'
          fontColor={getContrastColorByHex(hex)}
          backgroundColor={hex}
        >
          rgba Copy!
        </CopyButton>
      </CopyButtonWrapper>
    </>
  );
}

export default CustomPicker(MyPicker);
