import { Stores, StoreData } from "@/data/StoreType";
import { recoilSelectedStore, recoilStoreCode, recoilStoreState } from "@/store/stores/modalState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

interface StoreProps {
    store: (typeof StoreData)[number];
    onSelect: (id: number) => void;
    isSelected?: boolean;
}  
export default function SelectedStore({id, store, onSelect, isSelected}: {id:number; store: (typeof StoreData)[number]; onSelect:(id:number) => void; isSelected?:boolean;} ) {
    const [selectedStoreName , setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore)
    const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);
    const [storeCode, setStoreCode] = useRecoilState<string>(recoilStoreCode);
    
    
    const selectStore = () => {
        setSelectedStoreName(store.alt);
        setStoreState(true);
        setStoreCode(store.code);
        onSelect(id);
        
    }

    return (
        <Store key={store.code} onClick={selectStore} style={{background: isSelected ? "#f84040" : "#FFF"}}>
            <SelectedVisibleFilter style={{ display: isSelected ? "block" : "none"  }}>
                <Image style={{  margin: "13px" }} src={"/icon/group_21275.svg"} width={48} height={48} alt="스토어체크" />
            </SelectedVisibleFilter>
            <StoreImg src={store.src} alt={store.alt} width={88} height={75} />
            <StoreTextBox style={{ color: isSelected ? "#FFF":"#000" }}>{store.alt}</StoreTextBox>
        </Store>
    )
}

const SelectedVisibleFilter = styled.div`
    position: absolute;
    background: rgba(248,64,64,0.4);
    z-index: 100;
    text-align: center;
    border-radius: 10px;
    width: 90px;
    height: 90px;
`;

const Store = styled.div`
    width:90px;
    background: #FFF;
    border-radius: 10px;
    text-align: center;
    border: 1px solid #dcdcdc;
    margin: 2%;
    color: #fff;
    cursor: pointer;
    &:hover  {
        border: 1px solid #f84040;
    }
`;

const StoreImg = styled(Image)`
    &:focus {
        background: rgba(248, 64, 64, 0.5);
    }
`;

const StoreTextBox = styled.div`
    color:#000;
    margin: 2%;
    height: 15px;
`;