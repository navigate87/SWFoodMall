import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset} 

html {
    font-size: 11px;
    -webkit-text-size-adjust: none;
    /* min-width: 1600px;
    max-width: 1920px;
    min-height: 936px;
    max-width: 936px; */
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-display: fallback;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background-color: #f5f7fb;
    color: #222;
    width: 1920px;
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

li, ul {
  list-style: none;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-fade-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms ease-in, transform 300ms ease-in;
}
.slide-fade-exit {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-exit-active {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 500ms ease-in, transform 500ms ease-in;
}

/* 반대 슬라이드 방향 */
.reverse-slide-fade-enter {
  opacity: 0;
  transform: translateX(100%);
}
.reverse-slide-fade-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms ease-in, transform 300ms ease-in;
}
.reverse-slide-fade-exit {
  opacity: 1;
  transform: translateX(0);
}
.reverse-slide-fade-exit-active {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 500ms ease-in, transform 500ms ease-in;
}

.banner-fade-enter {
  opacity: 0.5;
}
.banner-fade-enter-active {
  opacity: 1;
  transition: opacity 0.7s linear forwards;
}
.banner-fade-exit {
  opacity: 1;
}
.banner-fade-exit-active {
  opacity: 0;
  transition: opacity 10s linear forwards;
}
`;


export default GlobalStyle;
