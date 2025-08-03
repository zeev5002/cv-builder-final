import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { lightTheme, darkTheme } from '../styles/themes';
import EditCvPage from './EditCvPage';
import PreviewPage from './PreviewPage';
import SettingsPage from './SettingsPage';
import NavBar from '../components/NavBar';
import GlobalStyle from '../styles/GlobalStyle';

function App() {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<EditCvPage />} />
        <Route path="/editor" element={<EditCvPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </StyledThemeProvider>
  );
}

export default App;
