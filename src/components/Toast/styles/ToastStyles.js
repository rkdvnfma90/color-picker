import styled from 'styled-components/macro';

export const ToastWrapper = styled.div`
  bottom: 1rem;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 1rem 2rem;
  max-width: 100%;
  max-height: 20%;
  z-index: 99;
`;
