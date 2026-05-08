import P from "../P"

const Footer = ({openValue}) => {
    return (

       <footer className={`bg-dark w-full bottom-0 mt-auto ${openValue ? "hidden" : ""}`}>

           <section className="flex flex-col py-7 px-6 justify-between items-center max-w-6xl mx-auto">

           <div className="sm:flex sm:w-full justify-between items-center">

           <div className="flex flex-col items-center">
            <P 
            className="font-display text-[20px] text-gold " 
            valor="Pelo Zero"/>

            <P 
            className="text-white text-[10px] uppercase"
            valor="Depilação & Estética Premium" 
            />
            </div>
   
            <div className="flex flex-col items-center">
            <P 
            className="text-gold text-[14px] font-display"
            valor="Fale Conosco"
            />

            <ul className="text-white font-display">
                <li className="text-[11px]">TELEFONE: (81) 9 9637-3606 </li>
                <li className="text-[11px]">TELEFONE: (81) 9 9720-3677</li>
                <li className="text-[11px] italic">Gerusa Cordeiro & Edselma</li>
            </ul>
            </div>

            </div>
            
            <div className="w-full mt-3 border-t-2 border-gray-300 text-center text-[10px]">
               
                 <P 
                 className="text-gray-400 mt-2"
                 valor="&copy; 2026 Pelo Zero - Depilação & Estética"
                 />
                 
                 <div className="flex justify-center items-center gap-1 mt-2">
                 <P 
                 className="text-gray-400" 
                 valor="Desenvolvido por"/>
                <a href="https://zentechbr.com.br/" className="text-gold hover:underline">ZenTech</a>
               </div>
            </div>

           </section>

       </footer>
       
    )
}

export default Footer  