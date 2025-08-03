import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
  max-width: 500px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function SettingsPage() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <Title>הגדרות עיצוב</Title>
      <p>המצב הנוכחי: <strong>{theme === 'light' ? 'בהיר' : 'כהה'}</strong></p>
      <Button onClick={toggleTheme}>החלף עיצוב</Button>
    </Container>
  );
}
