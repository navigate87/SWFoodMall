import styled from "styled-components";

export default function SlideButton(props:any) {
    const { slideIndex, slideLen, onNext, onPrev, onCurrent } = props;

    return (
        <>
            <ButtonContainer>
                <PrevButton onClick={()=>onPrev(-1)}>&#10094;</PrevButton>
                <NextButton onClick={() =>onNext(1)}>&#10095;</NextButton>
                {
                    [...Array(slideLen)].map((_,index) => 
                        <Dot isActive={slideIndex === index ? true : false} onClick={() => onCurrent(index)} key={index}/>)
                }
            </ButtonContainer>
        </>
    );
}

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 16px;
    margin-bottom:16px;
    font-size: 18px;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    -ms-transform: translate(-50%, 0%);
    width: 100%;
`;

const PrevButton = styled.div`
    cursor: pointer;
    float: left;
    &:hover{
        color: #eee;
    }
`;

const NextButton = styled.div`
    cursor: pointer;
    float: right;
    &:hover{
        color: #eee;
    }
`;

const Dot = styled.span<{
    isActive?: boolean
}>`
    height: 15px;
    width: 15px;
    padding: 0;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    display: inline-block;
    border: 1px solid #ccc;
    background-color: ${(props) => props.isActive ? '#fff' : 'transparent' };
    &:hover {
        color:#000 !important;
        background-color: #fff;
    }
`;