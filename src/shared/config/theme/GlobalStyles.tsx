import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
    <Global
        styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap');

      *, *::before, *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: 'Philosopher', serif;
        background-color: #ffffff;
        color: #2D4030;
      }
    `}
    />
);
