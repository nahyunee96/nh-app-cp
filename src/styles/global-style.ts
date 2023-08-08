import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
        margin: 0;
        padding: 0;
        background-repeat: no-repeat;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 62.5%;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 62.5%;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    ul,ol {
      list-style:none;  
    }

    ul,ol {
        list-style:none;  
    }

    a {
        text-decoration: none;
        color: #252525;
    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;