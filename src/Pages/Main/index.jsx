import { useOutletContext } from "react-router-dom";
import Bnt from "../../Components/Bnt"
import P from "../../Components/P"
import Pborder from "../../Components/Pborder"
import Data from "../../Data/Data";


const Main = () => {

   const {openValue} = useOutletContext();
   const imagem = Data.find((e) => e.Banner).Banner

   function runZap(){
     const phoneNumber = "5581997203677";
     const message = encodeURIComponent("Olá! Gostaria de agendar um horário no Pelo Zero.");
     const url = `https://wa.me/${phoneNumber}?text=${message}`;
     window.open(url, "_blank");
   }

    return (
      <>
      <main className={`w-full max-w-6xl mx-auto  ${openValue ? "hidden" : ""}`}>

        <section className="py-14 px-6 bg-hero flex justify-between items-center">

          <div>

            <Pborder valor="Depilação & Estética"/>

            <h1 className="text-4xl text-white font-elegant font-bold mt-4">Pelo <span className="text-gold">Zero</span></h1>

             <div className="h-px w-24 my-6 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

            <P 
            className="text-[#FFFFFF8C] text-[16px] font-elegant"
            valor="Referência em beleza e cuidado na região. Profissionais especializadas e atendimento que conquista."
            />

            <div className="mt-6 w-44">
              <Bnt
              valor="Agendar agora"
              onclick={runZap}
              />
            </div>

            </div>

            <div className="hidden md:block w-40">
              {imagem.map(({src, alt}, index) => (
                <img key={index} src={src}  alt={alt} />
              ))}
            </div>

        </section>

        </main>
      </>
    )
}

export default Main