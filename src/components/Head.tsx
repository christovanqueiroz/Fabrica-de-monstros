import Background from "../assets/background1.svg"
import Logo from "../assets/logo.svg"

import Iniciantes from "../assets/iniciantes.svg"
import Praticantes from "../assets/praticantes.svg"
import Atletas from "../assets/atletas.svg"

export default function Head() {
    return (
        <section className=
            "flex flex-col min-h-screen min-w-screen">
            <div className=
            "flex flex-col h-2/3 px-24 py-16 space-y-8 bg-contain bg-no-repeat bg-right border-b-2 border-red"
            style=
                {{backgroundImage: `url(${Background})`
            }}>
                <img src={Logo} className="w-40 h-16"/>

                <h1 className="text-3xl font-bold w-1/2">Transforme o seu corpo
                    <b className="text-red"> 5x </b>
                    mais
                    <b className="text-red"> rápido</b>
                </h1>

                <p className="text-xl font-semibold w-1/2">
                    Faça parte do método mais utilizado por atletas de alto nível.
                    Venha transformar seu corpo e reconquistar a sua autoestima.
                </p>

                <button className="uppercase bg-crimsom font-bold w-72 h-10 rounded hover:bg-white hover:text-crimsom">
                    Começar agora
                </button>
            </div>

            <div className="flex flex-col justify-evenly items-center h-72 bg-slate border-b-2 border-red">
                <h1 className="uppercase font-bold text-2xl">Feito para você</h1>

                <div className="flex space-x-24">
                    <div className="flex flex-col items-center space-y-2">
                        <img src={Iniciantes} className='h-16'/>
                        <span className="text-center w-64"> <b>Iniciante</b> na busca do corpo perfeito</span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <img src={Praticantes} className='h-16'/>
                        <span className="text-center w-64"> <b>Praticante</b> que não conseguem mais evoluir</span>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <img src={Atletas} className='h-16'/>
                        <span className="text-center w-64"> <b>Atleta</b> em evolução e em competições fisiculturistas</span>
                    </div>
                </div>
            </div>
        </section>
    )
}