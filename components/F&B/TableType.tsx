import { StoreSelectDataType } from "@/data/StoreType";
import { TableTypeData } from "@/data/TableType";
import { recoilTableTypeCode, recoilTableTypeName, recoilTableTypeSelect } from "@/store/stores/modalState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";


export default function TableTypeSelect({id, table, onSelect, isSelected}: {id:number; table: (typeof TableTypeData)[number]; onSelect:(id:number) => void; isSelected?:boolean;} ) {
    const [tableTypeName , setTableTypeName] = useRecoilState<string>(recoilTableTypeName)
    const [tableSelectState, setTableSelectState] = useRecoilState<boolean>(recoilTableTypeSelect);
    const [tableTypeCode, setTableTypeCode] = useRecoilState<string>(recoilTableTypeCode);
    
    const selectStore = () => {
        setTableTypeName(table.alt);
        setTableSelectState(true);
        setTableTypeCode(table.code);
        onSelect(id);
    }

    return (
        <Store key={table.code} onClick={selectStore} style={{background: isSelected ? "#f84040" : "#FFF"}}>
            <SelectedVisibleFilter>
                {
                    isSelected 
                    ? 
                    <>
                        <Image style={{  margin: "13px" }} src={table.src_1} width={48} height={48} alt="Table" /> 
                    </>
                    : 
                    <Image style={{  margin: "13px" }} src={table.src_2} width={48} height={48} alt="Table" />
                }
            </SelectedVisibleFilter>
            
            <StoreTextBox style={{ color: isSelected ? "#FFF":"#a2a2a2" }}>{table.alt}</StoreTextBox>
        </Store>
    )
}

const SelectedVisibleFilter = styled.div`
    z-index: 100;
    text-align: center;
    border-radius: 10px;
    width: 90px;
    height: 80px;
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

const StoreTextBox = styled.div`
    color:#000;
    margin: 2%;
    height: 15px;
`;