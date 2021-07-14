import MyPicker from '../MyPicker/MyPicker';
import { ColorPickerWrapper, PickerWrapper } from './styles/ColorPickerStyes';

function ColorPicker() {
  const handleColorChange = ({ hex, rgb }) => console.log(hex, rgb);
  return (
    <ColorPickerWrapper>
      <PickerWrapper>
        <MyPicker onChange={handleColorChange} />
      </PickerWrapper>
    </ColorPickerWrapper>
  );
}

export default ColorPicker;
