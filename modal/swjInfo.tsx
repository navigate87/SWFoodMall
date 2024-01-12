import styled, { css, keyframes } from "styled-components"

export default function SwjInfoPopup() {
    return (
        <Container width={470}>
            <MenuBox>

            </MenuBox>
        </Container>
    )
}

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
`;

const borderBottomChange = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

const hoverAnimation = css`
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f84040;
    animation: ${borderBottomChange} 0.2s linear forwards;
`;

const Container = styled.div<{width?:number, isVisible?:boolean}>`
    position: fixed;
    right: 0;
    width: ${({ width }) => width}px;
    height: 936px;
    z-index: 200;
    background:#fff;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    animation: ${({ isVisible }) => isVisible ? fadeInAnimation : fadeOutAnimation} 0.5s ease-in-out;
`;

const MenuBox = styled.div`
    height:80px;
    width:470px;
    display:flex;
    align-items:center;
    margin-top:10px;
    border-bottom:1px solid #dfdfdf;
`;

const MenuItem = styled.div<{isSelected?:boolean}>`
    height: 80px;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-bottom: ${({isSelected}) => (isSelected ? "2px solid #f84040" : "0" )};

    &:hover::after {
        ${({ isSelected }) => isSelected ? '' : hoverAnimation};
    }
`;