import { useRouter } from "next/router";
// import Layout from "@/components/Layout";
import Layout from "@/components/Layout2"
import Image from "next/image";
import Banner from "@/components/detailPage/Banner";
import styled from "styled-components";
import KeyFeature from "@/components/detailPage/KeyFeature";
import { useEffect, useState } from "react";
import { HallInfoProps } from "@/data/hallInfo";
import HallInfoPopup from "@/modal/hallInfo";
import { useRecoilState } from "recoil";
import { recoilHallInfoState } from "@/store/stores/modalState";
/* eslint-disable prettier/prettier */
export default function HallDetail() { 
    const router = useRouter();
    const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);
    const [hallInfoPopup, setHallInfoPopup] = useRecoilState<boolean>(recoilHallInfoState);
 
    const totalFeatures = 3;
    const currentFeature = HallInfoProps[activeFeatureIndex];
    
    useEffect(() => {
        
        if(activeFeatureIndex < totalFeatures) {

            const timer = setInterval(() => {
                
                setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % HallInfoProps.length);
                
            }, 20000);

            return () => clearTimeout(timer);
        }
    },[activeFeatureIndex]);

    

    const handleFeatureClick = (index:number) => {
        setActiveFeatureIndex(index);
    }

    return (
        <Layout>
            <MainContainer>    
                <Banner 
                    title={currentFeature.title}
                    description={currentFeature.description}
                    imageUrl={currentFeature.imageUrl}
                />
                <KeyFeatureContainer>
                    <KeyFeatureBox>
                        {
                            HallInfoProps.map((feature, index) => (
                                <KeyFeature 
                                    key={index} // 고유한 key 값 필요
                                    imageUrl={feature.imageUrlSmall}
                                    label={feature.title}
                                    detail={feature.floor}
                                    animate={activeFeatureIndex === index}
                                    onClick={() => handleFeatureClick(index)}    
                                />
                            ))
                        }
                    </KeyFeatureBox>
                </KeyFeatureContainer>
            </MainContainer>
            {
                hallInfoPopup && 
                <HallInfoPopup />
            }
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

const KeyFeatureContainer = styled.div`
  position: absolute;
  width: 1500px;
`;

const KeyFeatureBox = styled.div`
  margin-top: 750px;
  text-align: center;
`;