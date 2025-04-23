import { createGlobalStyle } from "styled-components";
import { background0 } from "../assets";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "JetBrains Mono", monospace;
    }

    body {
        background-image: url(${background0});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        min-height: 100vh;
        padding: 20px;
    }
`