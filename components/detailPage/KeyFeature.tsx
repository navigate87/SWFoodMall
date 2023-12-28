import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';


interface KeyFeatureProps {
  imageUrl: string;
  label: string;
  detail: string;
  position: string;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ imageUrl, label, detail, position }) => {
  return (
        <Feature>
            <FeatureBox>
                <FeatureImage src={imageUrl} alt={label} width={360} height={80} />
                <FeatureDetails Left={position}>
                    <FeatureTextBox1>
                        <FeatureTextBox2>
                            <FeatureText>{label}</FeatureText>
                            <Divider />
                            <FeatureText>{detail}</FeatureText>
                            <FeatureTextBox3>
                                <div>
                                    <Image src={"/icon/icon-sub-fullbanner-key-group.svg"} alt="groupkey" height={16} width={24} />
                                </div>
                                <div style={{ margin:"2px" }}></div>
                                <div style={{ color:"#fff" }}>
                                    333명 규모
                                </div>
                            </FeatureTextBox3>
                        </FeatureTextBox2>
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

const FeatureBox = styled.span`
    width: 365px;
    height: 80px;
`;

const FeatureImage = styled(Image)`
  opacity: 0.5;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  cursor: pointer;
`;

const FeatureDetails = styled.div<{Left:string}>`
  position: absolute;
  bottom: -25px;
  width: 360px;
  height: 80px;
  left: ${({Left})=> Left}px;
  cursor: pointer;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
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

const FeatureTextBox3 = styled.div`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;