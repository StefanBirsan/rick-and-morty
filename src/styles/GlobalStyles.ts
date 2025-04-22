import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "JetBrains Mono", monospace;
    }

    body {
        background-size: cover;
        background-color: #c6cbda;
        background-attachment: fixed;
        background-position: center;
        min-height: 100vh;
        padding: 20px;
    }
`