/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { useState } from "react";

type ToggleType = {
    latestSort: boolean
}

export default function Togglebtn() {
    const [latestSort, setLatestSort] = useState<boolean>(true)
    
    const toggleHandler = () => {
        setLatestSort((prev) => !prev)
    }

    return (
        <BtnWrapper>
            <CheckBox type="checkbox" id="toggleBtn" onChange={toggleHandler}></CheckBox>
            <ButtonLabel htmlFor="toggleBtn" latestSort={latestSort}>토글버튼</ButtonLabel>
        </BtnWrapper>
    );
}

const BtnWrapper = styled.div`
    z-index: 10;
`;

const CheckBox = styled.input`
    display: none;
`;

const ButtonLabel = styled.label<ToggleType>`
    z-index: 1;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: rgba(71,71,71,0.4);
    content: "토글버튼";
`;





