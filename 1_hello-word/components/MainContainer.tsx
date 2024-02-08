import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
interface LayoutProps {
    children: ReactNode;
  }
export default function MainContainer({children}: LayoutProps){

   return(
        <>
        <Navbar />
        <div>{children}</div>
        <Footer />
        </>
       
        

    )
}
//Não usado