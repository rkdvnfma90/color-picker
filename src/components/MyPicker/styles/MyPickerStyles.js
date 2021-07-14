import styled from 'styled-components/macro';

export const SaturationWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 1rem;
`;

export const HueWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 10px;
  margin-bottom: 1rem;
`;

export const AlphaWrapper = styled(HueWrapper)`
  border: 1px solid gray;
`;

export const EditableInputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 300px;
    height: 40px;
    border: none;
    text-align: center;
    font-size: 1.5rem;
  }

  input:focus {
    outline: none;
  }
`;

export const RgbaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-bottom: 1rem;
`;

export const RgbaInput = styled.input`
  width: 60px;
  height: 40px;
  text-align: center;
  font-size: 1.5rem;
`;

export const Label = styled.label`
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CopyButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const CopyButton = styled.button`
  width: 140px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
`;
