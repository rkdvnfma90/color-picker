import { useContext } from 'react';
import { ColorContext } from '../../contexts/colorContext';
import MyPicker from '../MyPicker/MyPicker';
import { ColorPickerWrapper, PickerWrapper } from './styles/ColorPickerStyes';

function ColorPicker() {
  const { setSelectedColor, selectedColor } = useContext(ColorContext);
  const handleColorChange = ({ hex, rgb }) => {
    setSelectedColor({
      hex,
      rgb,
    });
  };

  return (
    <ColorPickerWrapper>
      <PickerWrapper>
        <MyPicker color={selectedColor.hex} onChange={handleColorChange} />
      </PickerWrapper>
    </ColorPickerWrapper>
  );
}

export default ColorPicker;
