
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Treino ",
  description: "Treinando Next",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      
      <html lang="en">
      
      <body className={inter.className}> <MainContainer> {children} </MainContainer>  </body>
     
      </html>
      
       
    </>

  );
}
