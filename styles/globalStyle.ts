import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

html {
    font-size: 20px;
    -webkit-text-size-adjust: none;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-display: fallback;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background-color: #f5f7fb;
    color: #222;
    height: 100%;
}

body {
    height:100%;
    &.overflow {
      overflow: hidden;
    }
}

#root {
  margin: 0 auto;
}

#__next {
    height:100%;
}

* {
  box-sizing: border-box;
}

body, button {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
  Helvetica Neue, sans-serif;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  -webkit-tap-highlight-color : transparent;
}

a, a:visited {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;