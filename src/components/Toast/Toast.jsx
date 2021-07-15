import { useContext } from 'react';
import { ColorContext } from '../../contexts/colorContext';
import { ToastWrapper } from './styles/ToastStyles';
import { getContrastColorByHex } from '../../utils/functions';
import { useSpring, animated } from 'react-spring';

function Toast({ copied, children, ...props }) {
  const {
    selectedColor: { hex },
  } = useContext(ColorContext);

  const animation = useSpring({
    congif: {
      duration: 500,
    },
    opacity: copied ? 1 : 0,
    transform: copied ? `translateY(-5%)` : `translateY(0%)`,
  });

  return (
    <>
      {copied && (
        <ToastWrapper
          backgroundColor={hex}
          fontColor={getContrastColorByHex(hex)}
          {...props}
        >
          <animated.div style={animation}>{children}</animated.div>
        </ToastWrapper>
      )}
    </>
  );
}

export default Toast;
