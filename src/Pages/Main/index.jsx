import { useOutletContext } from "react-router-dom";
import Bnt from "../../Components/Bnt"
import P from "../../Components/P"
import Pborder from "../../Components/Pborder"
import Data from "../../Data/Data";
import H2 from "../../Components/H2";
import Line from "../../Components/ Line";


const Main = () => {

   const {openValue} = useOutletContext();
   const imagem = Data.find((e) => e.Banner).Banner
   const imagem2 = Data.find((e) => e.Service).Service

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

             <div className="my-6">
               <Line/>
             </div>

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

        <section className="flex flex-col items-center py-8">

           <div className="flex flex-col items-center gap-2.5">
  
             <Pborder valor="o que oferecemos"/>

             <H2 valor="Nossos" span="Serviços"/>

             <Line/>
  
           </div>
           
           <div className="flex gap-6 px-1 flex-wrap w-full justify-center mt-5">
             {imagem2.map(({simbulo, tema, descricao}, index) => (
              <div key={index} className="outline outline-gold-light w-80 px-5 py-5 flex flex-col gap-2 bg-hero">

                <div><img src={simbulo} alt="Simbolo de estrela god" /></div>

                <h3 className="text-gold font-elegant text-xl font-bold mb-2">
                 {tema}
                </h3>

                <Line/>

                <P className="text-[#FFFFFF8C] text-sm leading-relaxed" valor={descricao}/>
                
             
              </div>
              ))}
               
           </div>
             
        </section>

        </main>
      </>
    )
}

export default Main