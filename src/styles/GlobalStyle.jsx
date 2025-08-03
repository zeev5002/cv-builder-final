import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    direction: rtl;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button {
    background-color: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  input, textarea {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.inputBg || '#fff'};
  border: 1px solid ${({ theme }) => theme.borderColor || '#ccc'};
  padding: 0.5rem;
  border-radius: 4px;
}


  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

export default GlobalStyle;
