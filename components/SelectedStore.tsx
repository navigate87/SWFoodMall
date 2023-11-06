import { Stores, StoreData } from "@/data/StoreType";
import { recoilSelectedStore, recoilStoreState } from "@/store/stores/modalState";
import Image from "next/image";
import { useRecoilState } from "recoil";
import styled from "styled-components";


export default function SelectedStore({store}: { store: (typeof StoreData)[number] }) {
    const [selectedStoreName , setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore)
    const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);

    const selectStore = (storename:string) => {
        setSelectedStoreName(storename);
        setStoreState(true);
    }
    return (
        <Store key={store.alt} onClick={e => selectStore(store.alt)} >
            <Image src={store.src} alt={store.alt} width={110} height={100} />
            <StoreTextBox>{store.alt}</StoreTextBox>
        </Store>
    )
}

const Store = styled.div`
    width: 30%;
    background: #00498c;
    border-radius: 15px;
    text-align: center;
    /* line-height: 100px; */
    margin: 1.5%;
    color: #fff;

    &:hover {
        border:1px solid red;
        background: red;
    }
`;

const StoreTextBox = styled.div`
    color:#FFF;
    margin: 2%;
`;