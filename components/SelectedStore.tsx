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
            <Image src={store.src} alt={store.alt} width={100} height={100} />
        </Store>
    )
}

const Store = styled.div`
    width: 30%;
    background: #00498c;
    border-radius: 15px;
    text-align: center;
    /* line-height: 100px; */
    margin: 1%;
    color: #fff;

    &:hover {
        scale: 1.2;
    }
`;