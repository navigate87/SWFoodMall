import { HallInfoProps } from '@/data/hallInfo';
import { recoilHallInfoData, recoilHallInfoState } from '@/store/stores/modalState';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled, {css, keyframes} from 'styled-components';

interface KeyFeatureProps {
  imageUrl: string;
  label: string;
  detail: string;
  animate: boolean;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ imageUrl, label, detail, animate }) => {
  const [hallInfoPopup, setHallInfoPopup] = useRecoilState<boolean>(recoilHallInfoState);
  const [, setSelectedHallData] = useRecoilState(recoilHallInfoData);
  const handleMoreClick = () => {
    const selectedHallData = HallInfoProps.find(hall => hall.floor === detail);

    if (selectedHallData) {
      setSelectedHallData(selectedHallData); // 전역 상태 업데이트
    }

    setHallInfoPopup(true);
    
    document.body.style.overflow = "hidden";
  }
  
  return (
        <Feature>
            <FeatureBox animate={animate}>
                <FeatureImage animate={animate} src={imageUrl} alt={label} width={360} height={animate ? 120 : 80} />
                <FeatureDetails animate={animate}>
                    <FeatureTextBox1>
                        <FeatureTextBox2>
                            <FeatureText>{label}</FeatureText>
                            <Divider />
                            <FeatureText>{detail}</FeatureText>
                            <FeatureTextBox3 animate={animate}>
                                <div>
                                    <Image src={"/icon/icon-sub-fullbanner-key-group.svg"} alt="groupkey" height={16} width={24} />
                                </div>
                                <div style={{ margin:"2px" }}></div>
                                <div style={{ color:"#fff" }}>
                                    333명 규모
                                </div>
                            </FeatureTextBox3>
                        </FeatureTextBox2>

                      <FeatureAddLookBox animate={animate} onClick={handleMoreClick}>
                        <FeatureAddText>더보기</FeatureAddText>
                        <Image color={"#fff"} src={"/icon/icon_plus.png"} alt="Add" width={10} height={10} />
                      </FeatureAddLookBox>
                    </FeatureTextBox1>
                </FeatureDetails>
            </FeatureBox>
        </Feature>
  );
};

export default KeyFeature;

const Feature = styled.span`
    margin: 30px;
`;

const borderBottomChange = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 350px;
    }
`;

const FeatureBox = styled.span<{animate:boolean}>`
    position: relative;
    width: 365px;
    height: 80px;
    cursor: pointer;
    ${({ animate }) => animate && css`
    &:after {
      content: '';
      position: absolute;
      margin-bottom: 2px;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: red;
      margin-left:5px;
      border-radius: 15px;
      animation: ${borderBottomChange} 20s linear forwards;
    }
  `}
`;

const FeatureImage = styled(Image)<{animate:boolean}>`
  opacity: ${({ animate }) => (animate ? 1 : 0.5)};
  border-radius: 10px;
  border: ${({animate}) => (animate ? "2px solid #fff" : "none")};
`;

const FeatureDetails = styled.div<{animate:boolean}>`
  position: absolute;
  bottom: ${({animate}) => (animate ? 15 : -25)}px;
  width: 360px;
  height: 80px;
  left: 0;
`;

const FeatureTextBox1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FeatureTextBox2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`; 

const FeatureText = styled.div`
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Divider = styled.div`
  margin-left: 15px;
  border-left: 1px solid #fff;
  height: 15px;
`; 

const FeatureTextBox3 = styled.div<{animate:boolean}>`
    margin-left: 20px;
    display: ${({animate}) => (animate ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FeatureAddLookBox = styled.div<{animate:boolean}>`
  display: ${({animate}) => (animate ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 15px;
  height: 30px;
  width: 100px;
  margin: 15px;
  cursor: pointer;
`;

const FeatureAddText = styled.div`
  color: #fff;
  font-size: 14px;
  margin-right: 5px;
`;
