import { useOutletContext } from "react-router-dom";
import Bnt from "../../Components/Bnt"
import P from "../../Components/P"
import Pborder from "../../Components/Pborder"

const Main = () => {

   const {openValue} = useOutletContext();

    return (
      <>
      <main className={`${openValue ? "hidden" : ""}`}>

        <section className="py-14 px-6 bg-hero">
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
              />
            </div>
        </section>

        </main>
      </>
    )
}

export default Main