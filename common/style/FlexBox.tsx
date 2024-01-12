import styled from "styled-components";
import { FlexPropData } from "./StyleData/StyledValue";

export const HallPriceBox = styled.div`
    width:470px;
    height:40px;
    display:flex;
    justify-content:center;
    margin-top:20px;
`;

export const FontDiv = styled.div<{fontSize?:number, width?:number, height?:number, color?:string, fontWeight?:string, marginTop?:number, marginRight?:number}>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-right: ${({ marginRight }) => marginRight}px;
`;

export const FlexDiv = styled.div<FlexPropData>`
    display: flex;
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    flex-direction: ${({ flexDirection }) => flexDirection};
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-bottom: ${({ borderBottom }) => borderBottom};
    margin: ${({ margin }) => margin}px;
    margin-top: ${({ marginTop }) => marginTop}px;
    background: ${({ background }) => background};
    border-radius: ${({ borderRadius }) => borderRadius}px;
    margin-right: ${({ marginRight }) => marginRight}px;
`;

export const FlexN = styled.div<{flex?:number}>`
    flex: ${({ flex }) => flex};
`;