/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import PrimarySearchAppBar from "./common/nav/nav";

interface LayoutItemProp {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutItemProp) {
    const [item, setItem] = useState<string>("")

    useEffect(() => {
      setItem("레이아웃이래!!")
    }, [])
    return (
      <>
        <Header />
        <div style={{ display:"flex", justifyContent:"center" }}>{children}</div>
        <Footer/>
      </>
    )
}