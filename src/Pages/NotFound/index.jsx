import { Link } from "react-router-dom"

const NotFound = () => {
    return (
      <>
       <main className="w-full h-screen bg-dark-2 flex justify-center items-center">
            <section className="flex flex-col gap-3">
               <div className="flex flex-col items-center"> 
                  <h1 className="text-gold text-4xl font-display">404</h1>
                  <h2 className="text-gold text-2xl font-display">Page not foud</h2>
               </div>
               <div>
                 <Link to={"/"} className="border border-gold rounded-2xl text-gold p-2.5 hover:bg-gold-light hover:text-dark-2">Volta para a pagina inicial</Link>
               </div>
            </section>
       </main>
      </>
    )
}

export default NotFound