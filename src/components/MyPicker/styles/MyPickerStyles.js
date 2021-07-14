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
