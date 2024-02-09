import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import  Head  from "next/head";



export default function Home() {
  return (
    <> 
        <Head>
        <title> Pagina Inicial</title>
        <meta name = "keyworkds" content="Utensilhos em geral" ></meta>
        </Head>
        <h1 className="title">Hola Mundo</h1>
        <Image 
        src="/images/city.jpg" 
        width="200" 
        height="200" 
        alt="Cidade a noite" 
        />
       
      
    </>
  );
}
