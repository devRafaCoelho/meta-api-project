import { Global, css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const GlobalStyles = () => {
  const theme = useTheme();

  const Css = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    #root {
      min-height: 100vh;
    }

    body {
      color: ${theme.palette.common.white};
      background-color: ${theme.palette.common.black};
    }
  `;

  return <Global styles={Css} />;
};
