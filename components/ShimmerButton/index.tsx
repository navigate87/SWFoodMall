import styled, { keyframes } from "styled-components";

const shimmerAnimation = keyframes`
    from {
        --shimmer: 0deg;
    }
    to {
        --shimmer: 360deg;
    }
`;

const shineAnimation = keyframes`
    0% {
        opacity: 0;
    }
    15% {
        opacity: 1;
    }
    55% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const ShimmerButton = styled.button<{isVisible?:boolean}>`
  color: var(--bg);
  font-weight: 600;
  height: 68px;
  width: 72px;
  opacity: 0.8;
  background: ${({ isVisible }) => (isVisible ? "#ff0000" : 'rgba(223,223,223, 0.1)')};
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(10px);
  /* background-image: linear-gradient(
    315deg,
    #ffc4ec -10%,
    #efdbfd 50%,
    #ffedd6 110%
  ); */
  /* padding: .8em 1.4em; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  position: relative;
  isolation: isolate;
  box-shadow: 0 2px 3px 1px hsl(var(--glow-hue) 50% 20% / 50%), inset 0 -10px 20px -10px hsla(var(--shadow-hue),10%,90%,95%);
  border-radius: 30.5px;
  scale: 1;
  transition: all var(--spring-duration) var(--spring-easing);

  &:hover:not(:active),
  &.active {
    transition-duration: calc(var(--spring-duration)*0.3);
    scale: 1;
    /* box-shadow: 0 4px 8px -2px hsl(var(--glow-hue) 50% 20% / 50%), inset 0 0 0 transparent; */
  }

  &:active {
    scale: 1;
    transition-duration: calc(var(--spring-duration)*0.5);
  }

  .shimmer {
    position: absolute;
    inset: -37px;
    border-radius: inherit;
    mask-image: conic-gradient(
      from var(--shimmer, 0deg),
      transparent 0%,
      transparent 10%,
      black 36%,
      black 45%,
      transparent 50%,
      transparent 60%,
      black 85%,
      black 95%,
      transparent 100%
    );
    mask-size: cover;
    mix-blend-mode: plus-lighter;
    animation: ${shimmerAnimation} 1s linear infinite both;
  }

  /* &:hover .shimmer::before,
  &:hover .shimmer::after, */
  &.active .shimmer::before,
  &.active .shimmer::after {
    opacity: 1;
    animation: ${shineAnimation} 1.2s ease-in 1 forwards;
  }
  &:hover{
    background: #f84040;
  }
  .shimmer::before,
  .shimmer::after {
    transition: all 0.5s ease;
    opacity: 0;
    content: "";
    border-radius: inherit;
    position: absolute;
    mix-blend-mode: color;
    inset: 40px;
    pointer-events: none;
  }

  .shimmer::before {
    box-shadow: 0 0 3px 2px hsl(var(--glow-hue) 20% 95%),
        0 0 7px 4px hsl(var(--glow-hue) 20% 80%),
        0 0 13px 4px hsl(var(--glow-hue) 50% 70%),
        0 0 25px 5px hsl(var(--glow-hue) 100% 70%);
    z-index: -1;
}

.shimmer::after {
    box-shadow: inset 0 0 0 1px hsl(var(--glow-hue) 70% 95%),
        inset 0 0 2px 1px hsl(var(--glow-hue) 100% 80%),
        inset 0 0 5px 2px hsl(var(--glow-hue) 100% 70%);
    z-index: 2;
}
`;