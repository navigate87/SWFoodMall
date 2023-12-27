import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/Button.module.scss";
import SlideShow from "@/components/slideShow";
import Image from "next/image";
/* eslint-disable prettier/prettier */
export default function List() { 
    const router = useRouter();
    // console.log(router)
    return (
        <Layout>
            <div style={{ display:"flex", justifyContent: "center", alignItems: "center", marginTop: "-60px" }}>
                <Image 
                    src={"/image/sub-fullbanner-img.webp"}
                    height={936}
                    width={1920}
                    alt="hall"
                />
                <div style={{ position: "absolute", width: "700px" }}>
                    <div style={{ marginBottom:"500px", textAlign: "center" }}>
                        <div style={{ color:"#fff", fontSize: "40px" }}>
                            중규모 연회장
                        </div>
                        <div style={{ marginTop:"40px", color:"#fff", fontSize: "23.5px", lineHeight:"30px" }}>
                            스테이락 호텔 12층에 위치한 중규모 연회장으로 120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다.
                        </div>
                    </div>
                    <div style={{ textAlign:"center",  }}>
                        
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}