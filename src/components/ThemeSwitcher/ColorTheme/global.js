import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    transition: all 0.3s linear;
  }
  header {
    background-color: ${({ theme }) => theme.headerSection};
    transition: all 0.3s linear;
  }
  h1, h2 {
    color: ${({ theme }) => theme.headerText};
    transition: all 0.25s linear;
  }
  hr {
    border: 1px solid ${({ theme }) => theme.hr};
    transition: all 0.25s linear;
  }
  span, p{
    color: ${({ theme }) => theme.text}; 
    
  }
  section {
    background-color: ${({ theme }) => theme.sections};
    transition: all 0.25s linear;
    cursor: pointer;
  }
  section:hover {
    background-color: ${({ theme }) => theme.sectionHover};
    transition: all 0.25s linear;
  }
`;
