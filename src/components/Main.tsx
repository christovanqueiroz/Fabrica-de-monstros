import strongA from "../assets/strongA.svg"
import rightArrow from "../assets/right-arrow.svg"

export default function Main() {
    return (
        <section className="min-h-screen min-w-screen items-center">
            <div className="flex flex-col items-center py-12 px-6">
                <h1 className="uppercase font-bold text-3xl">
                    Como funciona o
                    <span className="text-red ml-1.5">
                        método 5x
                    </span>
                </h1>

                <div className="flex space-x-4">
                    <div className="flex flex-col w-72 justify-end items-center uppercase font-bold bg-auto" style={{backgroundImage:`url: ${strongA}`}}>
                        <div className="flex flex-col h-[24rem] pb-4 space-y-2 justify-end items-center border border-red text-center rounded-sm">
                            <p className="text-lg">
                                Transformando a alimentação
                            </p>

                            <span className="py-1 px-12 bg-crimsom rounded-full">
                                Módulo 1
                            </span>
                        </div>
                        
                        <a href="#" className="flex w-72 space-x-1.5 items-center text-sm p-2 bg-crimsom">
                            <img src={rightArrow}/>
                            <span>
                                Saiba Mais
                            </span>
                        </a>
                    </div>
                </div>

                <button className="uppercase">
                    Botão
                </button>
            </div>
        </section>
    )
}