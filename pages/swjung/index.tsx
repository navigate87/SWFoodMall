import Layout from "@/components/Layout2";
import styled from "styled-components";
import { SWJInfoData, SWJInfoProps } from "@/data/SwjInfoType";
import SwjGuideItem from "@/components/detailPage/SwjGuideItem";
import { useEffect, useState } from "react";
import DescriptionModule from "@/components/detailPage/DescriptionModule";
/* eslint-disable prettier/prettier */
export default function List() { 
    const [selectedItem, setSelectedItem] = useState<SWJInfoData>(SWJInfoProps[0]);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const handleSelect = (index:number) => {
        setSelectedItemIndex(index);
        
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (selectedItemIndex + 1) % SWJInfoProps.length;
            setSelectedItemIndex(nextIndex);
        }, 5000);

        return () => clearInterval(interval); 
    },[selectedItemIndex]);

    useEffect(() => {
        setSelectedItem(SWJInfoProps[selectedItemIndex]);
    }, [selectedItemIndex]);
    
    return (
        <Layout>
            <MainContainer>
                <DescriptionModule 
                    selectedItem={selectedItem} 
                />
                <SelectGuideBox>
                    <IntervalBox>
                        {
                            SWJInfoProps.map((item, index) => (
                                <SwjGuideItem 
                                    key={index} 
                                    item={item} 
                                    onSelect={()=>handleSelect(index)}
                                    index={index}
                                    isActive={selectedItemIndex === index}
                                />
                            ))
                        }
                    </IntervalBox>
                </SelectGuideBox>
            </MainContainer>
        </Layout>
    )
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    position: relative;
`;

const SelectGuideBox = styled.div`
    position: absolute;
    width:1500px;
`;

const IntervalBox = styled.div`
    margin-top: 750px;
    text-align: center;
`;