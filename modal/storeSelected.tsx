import styled from "styled-components";

export default function StoreSelectPopup() {
    return (
        <ModalBackground>
            <Container>

            </Container>
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
    overflow: hidden;
`;

const Container = styled.div`
    position: absolute;
    top: calc(50vh - 390px);
    left: calc(50vw - 156px);
    background-color: white;
    border-radius: 25px;
    width: 312px;
    height: 546px;
    z-index: 100;
`;



