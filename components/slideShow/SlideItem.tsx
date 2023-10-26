
import styled from "styled-components";
import React from "react";



export default function SlideItem(props:any) {
    const { src, title, content, visivility } = props;

    return (
        <>
            <SlideDiv visivility={visivility}>
                <SlideImage src={src} alt="w3slider" />
                <SlideContent>
                    <SlideTitle>
                        {title}
                    </SlideTitle>
                    <div>
                        {content}
                    </div>
                </SlideContent>
            </SlideDiv>
        </>
        
    );
} 

const SlideDiv = styled.div<{
    visivility?: string;
}>`
    display: ${(prop) => prop.visivility};
    flex-direction: row;
    width: 100%;
    height: 200px;
    background-color: black;
    color: white;
    text-align: center;
`;

const SlideContent = styled.div`
    margin: auto;
    line-height: 5;
`;

const SlideImage = styled.img`
    padding: 10px;
    float: left;
    width: 40%;
    height: 100%;
`;

const SlideTitle = styled.div`
    font-size: xx-large;
    text-transform: uppercase;
    margin-bottom: 20px;
`;