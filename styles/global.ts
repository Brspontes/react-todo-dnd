import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body {
    height: 100%
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: rgb(0,73,191);
    background: linear-gradient(90deg, rgba(0,73,191,1) 0%, rgba(190,190,255,1) 46%, rgba(0,212,255,1) 100%);
    color: #333;
    -webkit-font-smoothing: antialiased !important
  }

  ul {
    list-style: none;
  }
`