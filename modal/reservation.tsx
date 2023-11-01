import { useRecoilState } from "recoil";
import styled from "styled-components"
import { modalShowState } from "@/store/stores/modalState";
export default function Reservation() {
    const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState)
    const handleClick = (event:any) => {
        setShowModal(false);
        document.body.style.overflow = "auto";
    }
    return (
        <ModalBackground onClick={handleClick}>
            <Container>
                PopUp 
            </Container>
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    overflow: hidden;
`;

const Container = styled.div`
    position: absolute;
    top: calc(50vh - 390px);
    left: calc(50vw - 750px);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 1500px;
    height: 600px;
`;