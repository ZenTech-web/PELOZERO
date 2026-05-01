import { useState } from "react";
import P from "../P"
import { FaBars, FaTimes} from 'react-icons/fa';

const Header = () => {

   const [valor, setValor] =useState(false)

   function isMenuOpen() {
    setValor(!valor)
   }

    return (
         <>
        <header className="bg-dark w-full ">
            
            <section className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">

            <P 
            className="font-display text-[18px] text-gold " 
            valor="Pelo Zero"
            />
            
            <button onClick={isMenuOpen} className={"text-white cursor-pointer transition-colors hover:text-gold active:text-gold md:hidden"}>
             {valor ? <FaTimes size={20}/> : <FaBars  size={20} />}
            </button>

            <ul className="hidden text-white text-[12px] gap-5 uppercase md:flex">
                <li className="hover:text-gold-light cursor-pointer">serviços</li>
                <li className="hover:text-gold-light cursor-pointer">preços</li>
                <li className="hover:text-gold-light cursor-pointer">sobre</li>
                <li className="hover:text-gold-light cursor-pointer">contato</li>
            </ul>

            </section>

        </header>

        <section className={`bg-dark-2 w-full border border-t-white py-2 px-6 absolute transition-all duration-300 ease-in-out origin-top left-0 md:hidden ${valor ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"}`}>
          <ul className="text-white text-[12px] font-body uppercase flex flex-col gap-1.5">
            <li className="hover:text-gold-light cursor-pointer">serviços</li>
            <li className="hover:text-gold-light cursor-pointer">preços</li>
            <li className="hover:text-gold-light cursor-pointer">sobre</li>
            <li className="hover:text-gold-light cursor-pointer">contato</li>
          </ul>
        </section>
        </>
    )
}

export default Header