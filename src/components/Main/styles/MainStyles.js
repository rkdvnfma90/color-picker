import styled from 'styled-components/macro';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.fontColor};
`;

export const MainTitle = styled.h1`
  margin-bottom: 5rem;
  font-size: 5rem;
  font-weight: 900;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
