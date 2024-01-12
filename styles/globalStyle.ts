import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset} 

:root {
  --glow-hue: 222deg;
  /* --shadow-hue: 180deg; */
  --spring-easing: linear(
    0, 0.002, 0.01 0.9%, 0.038 1.8%, 0.156, 0.312 5.8%, 0.789 11.1%, 1.015 14.2%,
    1.096, 1.157, 1.199, 1.224 20.3%, 1.231, 1.231, 1.226, 1.214 24.6%,
    1.176 26.9%, 1.057 32.6%, 1.007 35.5%, 0.984, 0.968, 0.956, 0.949 42%,
    0.946 44.1%, 0.95 46.5%, 0.998 57.2%, 1.007, 1.011 63.3%, 1.012 68.3%,
    0.998 84%, 1
  );
  --spring-duration: 1.33s
}

@property --shimmer {
    syntax: "<angle>";
    inherits: false;
    initial-value: 33deg;
}

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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, SourceHansSans
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
  transition: opacity 200ms ease-in, transform 200ms ease-in;
}
.reverse-slide-fade-exit {
  opacity: 1;
  transform: translateX(0);
}
.reverse-slide-fade-exit-active {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 200ms ease-in, transform 200ms ease-in;
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
