/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";

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
        <h1>{item}</h1>
        <div>{children}</div>
        <Footer/>
      </>
    )
}