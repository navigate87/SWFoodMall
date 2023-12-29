import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/Button.module.scss";
import SlideShow from "@/components/slideShow";
import Image from "next/image";
import Banner from "@/components/detailPage/Banner";
import styled from "styled-components";
import KeyFeature from "@/components/detailPage/KeyFeature";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { HallInfoProps } from "@/data/hallInfo";
import HallInfoPopup from "@/modal/hallInfo";
import { useRecoilState } from "recoil";
import { recoilHallInfo } from "@/store/stores/modalState";
/* eslint-disable prettier/prettier */
export default function HallDetail() { 
    const router = useRouter();
    const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0);
    const [hallInfoPopup, setHallInfoPopup] = useRecoilState<boolean>(recoilHallInfo);
 
    const totalFeatures = 3;
    const currentFeature = HallInfoProps[activeFeatureIndex];
    
    useEffect(() => {
        
        if(activeFeatureIndex < totalFeatures) {

            //console.log("Effect 실행됨. 현재인덱스:", activeFeatureIndex)
            const timer = setTimeout(() => {
                
                setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % totalFeatures);
                
            }, 20000);

            return () => clearTimeout(timer);
        }
    },[activeFeatureIndex]);

    return (
        <Layout>
            <MainContainer>    
                {/* <CSSTransition
                    key={activeFeatureIndex}
                    in={true}
                    timeout={2000}
                    classNames="banner-fade"
                    unmountOnExit
                > */}
                    <Banner 
                        title={currentFeature.title}
                        description={currentFeature.description}
                        imageUrl={currentFeature.imageUrl}
                    />
                {/* </CSSTransition>          */}
                
             
                <KeyFeatureContainer>
                    <KeyFeatureBox>
                        <KeyFeature 
                            imageUrl="/image/sub-fullbanner-key-img_middle.webp"
                            label="중규모 연회장"
                            detail="12F"
                            animate={activeFeatureIndex === 0}

                        />
                        <KeyFeature 
                            imageUrl="/image/sub-fullbanner-key-img_small.webp"
                            label="소규모 연회장"
                            detail="11F"
                            animate={activeFeatureIndex === 1}
                        />
                        <KeyFeature 
                            imageUrl="/image/sub-fullbanner-key-img_small_2.webp"
                            label="소규모 연회장"
                            detail="3F"
                            animate={activeFeatureIndex === 2}
                        />
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