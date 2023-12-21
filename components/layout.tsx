/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

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
          <div>{children}</div>
        <Footer/>
      </>
    )
}

