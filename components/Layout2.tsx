/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./DetailHeader";
import Footer from "./Footer";

interface LayoutItemProp {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutItemProp) {
    return (
      <>
        <Header />
          {children}
        <Footer/>
      </>
    )
}

