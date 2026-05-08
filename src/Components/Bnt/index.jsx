import { BsWhatsapp } from "react-icons/bs";

const Bnt = (props) => {
    return (
       <button onClick={props.onclick} className="text-dark text-[14px] bg-gold-shine flex uppercase py-1.5 px-4 gap-1.5 cursor-pointer hover:translate-y-[0.15rem] transition-all duration-300">
        <BsWhatsapp className="text-dark text-[18px]" />
        <span>{props.valor}</span>
       </button>
    )
}

export default Bnt