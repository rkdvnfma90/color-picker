import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Main from '../Main/Main';
import { ColorProvider } from '../../contexts/colorContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ColorProvider>
          <Main />
        </ColorProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
