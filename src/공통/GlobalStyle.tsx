import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      
      html {
        font-size: 16px;
      }
      
      body {
        background-color: #F6F6F6;
        font-size: 1rem;
        font-size: 16px;
        word-break: keep-all;
      }
      
      body, pre, input, button, textarea, select, legend {
        font-family: 'Pretendard';
      }
      
      h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 0;
      }
      
      a {
        text-decoration: none;
      }
      
      fieldset {
        margin: 0;
        padding: 0;
        border: 0;
      }
      
      legend {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
      }
      
      label {
        cursor: pointer;
      }
      
      p, ul, dl, pre {
        margin-top: 0;
        margin-bottom: 0;
      }
      
      ul {
        padding-left: 0;
        list-style-type: none;
      }
      
      dd {
        margin-left: 0;
      }
      
      button {
        cursor: pointer;
      }
      
      figure {
        margin: 0;
      }
    `}
  />
);

export default GlobalStyle;
