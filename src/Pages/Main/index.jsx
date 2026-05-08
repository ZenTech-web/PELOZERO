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
   const dados = Data.find((e) => e.Service).Service
   const dadosPrices = Data.find((e) => e.Prices).Prices
   const evaluated = Data.find((e) => e.evaluated).evaluated

   function runZap(){
     const phoneNumber = "5581997203677";
     const message = encodeURIComponent("Olá! Gostaria de agendar um horário no Pelo Zero.");
     const url = `https://wa.me/${phoneNumber}?text=${message}`;
     window.open(url, "_blank");
   }

   function runZap1(){
     const phoneNumber = "5581996373606";
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
             {dados.map(({simbulo, tema, descricao}, index) => (
              <div key={index} className="outline outline-gold-light/40 w-80 px-5 py-5 flex flex-col gap-2 bg-hero">

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

        <section className="flex flex-col items-center py-8">

           <div className="flex flex-col items-center gap-2.5">
  
             <Pborder valor="Tabela de valores"/>

             <H2 valor="Nossos" span="Preços"/>

             <Line/>
             
             <P className="uppercase mt-2.5 text-[#FFFFFF8C] text-[10px] font-elegant" valor="* Preços sujeitos a alteração"/>
           </div>

           <div className="flex gap-6 px-1 flex-wrap w-full justify-center mt-5">
  {dadosPrices.map((categoria, index) => (
    <div key={index} className="bg-hero outline-1 outline-gold-light/40 p-6 rounded-xl w-full max-w-[350px]">
      
      
      <div className="flex flex-col items-center mb-6 text-center">

        <div className="flex items-center gap-1.5">
  
          <div>
          <img src={categoria.simbulo} alt="Símbolo" />
          </div>
          <h3 className="text-gold font-elegant text-xl font-bold uppercase tracking-widest">
            {categoria.tema}
          </h3>
        </div>

        <div className="h-[2px] w-12 bg-gold mt-2"></div>
      </div>

     
      <div className="space-y-4">
        {categoria.servicos.map((item, i) => (
          <div key={i} className="flex justify-between items-end gap-2 group">
            <span className="text-white font-body text-sm uppercase group-hover:text-gold transition-colors">
              {item.nome}
            </span>
            
            
            <div className="flex-1 border-b border-dashed border-white/20 mb-1"></div>
            
            <span className="text-gold font-bold text-sm">
              {item.valor}
            </span>
          </div>
        ))}
      </div>

    </div>
  ))}
</div>

        </section>

        <section className="mx-auto my-5 border border-gold/40 w-87.5 p-6 flex flex-col gap-1 bg-hero">
           <P className="uppercase text-gold text-[12px] md:text-[15px]" valor="Nossas unidades"/>
           <P className="text-white text-[10px] md:text-[12px]" valor="Cruzes—Travessa Coronel Melinho, S/N" />
           <P className="text-white text-[10px] md:text-[12px]" valor="Panelas — Rua Manoel Benigno, 31 – Centro"/>
        </section>

        <section className="border border-gold/40 w-87.5 mx-auto bg-hero py-6 px-5 flex flex-col gap-2 md:py-8">
          <div className="flex items-center ">
            <P className=" text-white text-[15px] font-elegant italic md:text-[18px]" valor='"Acreditamos que toda mulher merece se sentir bonita e cuidada. Beleza é confiança, e confiança começa aqui."'/>
          </div>
          <Line/>
         <P className="uppercase text-gold text-[9px] font-body md:text-[12px]" valor="Gerusa & Edselma — Pelo Zero"/>
        </section>
       
         <section className="flex flex-wrap gap-2 justify-center mt-5">
          {evaluated.map(({src, alt, avaliacao, numero}, index) => (
            <div key={index} className="flex flex-col items-center gap-1 border border-gold/40 p-2 bg-hero w-28">
              
              <div className="flex gap-0.5 items-center justify-center">
              <span className="text-gold font-bold text-sm">{numero}</span>
              <img className="" src={src} alt={alt} />
              </div>

              
              <P className="text-gray-300/70 text-sm font-elegant text-center" valor={avaliacao}/>

            </div>
          ))}
         </section>

         <section className="mt-14 mb-5 w-full ">
           <article className="w-88 lg:w-250 mx-auto flex flex-col gap-3">
            <div>
            <Pborder valor="Quem somos"/>
            </div>
           <H2 valor="Sobre o" span="Pelo Zero"/>
           <Line/>
           <P span="Pelo Zero " spanClass="text-gold" valor="é o salão de depilação e estética mais procurado e reconhecido da região — referência em qualidade, profissionalismo e atendimento que conquista cada cliente desde a primeira visita."
            className="text-white/60 text-[10px] md:text-[16px]"
           />
           <P valor="Nossa equipe é formada por profissionais altamente especializadas em depilação feminina e design de sobrancelhas com aplicação de henna, com técnica de depilação egípcia apurada e atendimento acolhedor que faz toda a diferença. Aqui cada cliente recebe atenção personalizada do início ao fim."
            className="text-white/60 text-[10px] md:text-[16px]"
           />
           <P valor="O salão Pelo Zero está à disposição dos clientes com um horário marcado pelo WhatsApp."
            className="text-white/60 text-[10px] md:text-[16px]"
           />
           </article>
         </section>
         
         <section className="flex flex-col items-center gap-3 my-6 bg-hero py-6">
          <Pborder valor="agende seu horario"/>
          <H2 valor="Pronta para se" span="transformar?"/>
          <Line/>
          <P className="text-center text-[12px] md:text-[16px] font-elegant text-white/60 w-72 md:w-96" valor="Entre em contato pelo WhatsApp e agende seu horário.
          Atendemos em Cruzes e Panelas com todo o carinho que você merece."/>
          
          <div className="flex gap-4 mt-4">
             <Bnt onclick={runZap1} valor="WhatsApp 1" />
             <Bnt onclick={runZap} valor="WhatsApp 2" />
          </div>
          
         </section>
        </main>
      </>
    )
}

export default Main