import { CustomPicker } from 'react-color';
import Toast from '../Toast/Toast';
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
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useClipboardCopy from '../../hooks/useClipboardCopy';
import { COPIED_MESSAGE } from '../../constants/messageConstants';

function MyPicker({ hsl, hsv, rgb, hex, onChange }) {
  const [copied, setCopied] = useClipboardCopy();

  return (
    <>
      <Toast copied={copied}>{COPIED_MESSAGE}</Toast>
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
        <CopyToClipboard text={hex} onCopy={() => setCopied(true)}>
          <CopyButton
            type='button'
            fontColor={getContrastColorByHex(hex)}
            backgroundColor={hex}
          >
            HEX Copy!
          </CopyButton>
        </CopyToClipboard>

        <CopyToClipboard
          text={`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`}
          onCopy={() => setCopied(true)}
        >
          <CopyButton
            type='button'
            fontColor={getContrastColorByHex(hex)}
            backgroundColor={hex}
          >
            rgba Copy!
          </CopyButton>
        </CopyToClipboard>
      </CopyButtonWrapper>
    </>
  );
}

export default CustomPicker(MyPicker);
