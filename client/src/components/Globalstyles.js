
import React from "react";
import { createGlobalStyle } from "styled-components";

// Global styles to be applied on the entire application
const GlobalStyles = createGlobalStyle`

    p,div{
        font-size: 16px;
    }
    *{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;

export default GlobalStyles;