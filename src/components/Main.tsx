import strongA from "../assets/strongA.svg"
import strongB from "../assets/strongB.svg" 
import strongC from "../assets/strongC.svg"
import strongD from "../assets/strongD.svg"

import logoOpac from "../assets/logo-opac.svg"
import rightArrow from "../assets/right-arrow.svg"

import userA from "../assets/userA.jpg"
import userB from "../assets/userB.jpg"
import userC from "../assets/userC.jpg"


export default function Main() {
    return (
        <section className="min-h-screen min-w-screen items-center">
            <div className="flex flex-col items-center space-y-12 py-12 px-6">
                <h1 className="uppercase font-bold text-3xl">
                    Como funciona o
                    <span className="text-red ml-1.5">
                        método 5x
                    </span>
                </h1>

                <div className="flex space-x-4">
                    <div className="flex flex-col w-min justify-end items-center uppercase font-bold">
                        <div className="flex flex-col w-72 h-[24rem] pb-4 space-y-2 justify-end items-center bg-cover bg-center border border-crimsom border-b-0 text-center rounded-sm" style={{backgroundImage: `url(${strongA}`}}>
                            <p className="text-lg px-4">
                                Transformando a alimentação
                            </p>

                            <span className="py-1 px-12 bg-crimsom rounded-full">
                                Módulo 1
                            </span>
                        </div>
                        
                        <a href="#" className="flex w-72 space-x-1.5 items-center text-sm p-2 bg-crimsom hover:bg-white hover:text-crimsom">
                            <img src={rightArrow}/>
                            <span>
                                Saiba Mais
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col w-min justify-end items-center uppercase font-bold">
                        <div className="flex flex-col w-72 h-[24rem] pb-4 space-y-2 justify-end items-center bg-cover bg-center border border-crimsom border-b-0 text-center rounded-sm" style={{backgroundImage: `url(${strongB}`}}>
                            <p className="text-lg px-4">
                                Cronograma dos treinos
                            </p>

                            <span className="py-1 px-12 bg-crimsom rounded-full">
                                Módulo 2
                            </span>
                        </div>
                        
                        <a href="#" className="flex w-72 space-x-1.5 items-center text-sm p-2 bg-crimsom hover:bg-white hover:text-crimsom">
                            <img src={rightArrow}/>
                            <span>
                                Saiba Mais
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col w-min justify-end items-center uppercase font-bold">
                        <div className="flex flex-col w-72 h-[24rem] pb-4 space-y-2 justify-end items-center bg-cover bg-center border border-crimsom border-b-0 text-center rounded-sm" style={{backgroundImage: `url(${strongC}`}}>
                            <p className="text-lg px-4">
                                A importância do descanso 
                            </p>

                            <span className="py-1 px-12 bg-crimsom rounded-full">
                                Módulo 3
                            </span>
                        </div>
                        
                        <a href="#" className="flex w-72 space-x-1.5 items-center text-sm p-2 bg-crimsom hover:bg-white hover:text-crimsom">
                            <img src={rightArrow}/>
                            <span>
                                Saiba Mais
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col w-min justify-end items-center uppercase font-bold">
                        <div className="flex flex-col w-72 h-[24rem] pb-4 space-y-2 justify-end items-center bg-cover bg-center border border-crimsom border-b-0 text-center rounded-sm" style={{backgroundImage: `url(${strongD}`}}>
                            <p className="text-lg px-4">
                                Alcançando os objetivos
                            </p>

                            <span className="py-1 px-12 bg-crimsom rounded-full">
                                Módulo 4
                            </span>
                        </div>
                        
                        <a href="#" className="flex w-72 space-x-1.5 items-center text-sm p-2 bg-crimsom hover:bg-white hover:text-crimsom">
                            <img src={rightArrow}/>
                            <span>
                                Saiba Mais
                            </span>
                        </a>
                    </div>
                </div>

                <button className="uppercase rounded font-bold text-center px-24 py-2 bg-crimsom hover:bg-white hover:text-crimsom">
                    Quero começar agora
                </button>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="uppercase font-bold text-3xl text-center px-96">
                    O que estão falando do nosso método de treinamento
                </h1>

                <div className="flex space-x-8">
                    <div className="flex flex-col w-80 h-80 p-5 bg-slate border-b-2 border-red rounded bg-no-repeat bg-right-bottom space-y-8" 
                    style={{backgroundImage: `url(${logoOpac})`}}>
                        <div className="flex">
                            <div className="w-16 h-16">
                                <img src={userA} className="w-full h-full rounded-2xl border border-red"/>
                            </div>

                            <div className="flex flex-col justify-center uppercase ml-6">
                                <h3 className="font-bold">Leonardo</h3>
                                <span className="text-xs text-red">Fisiculturista</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-80 h-80 p-5 bg-slate border-b-2 border-red rounded bg-no-repeat bg-right-bottom space-y-8" 
                    style={{backgroundImage: `url(${logoOpac})`}}>
                        <div className="flex">
                            <div className="w-16 h-16">
                                <img src={userB} className="w-full h-full rounded-2xl border border-red"/>
                            </div>

                            <div className="flex flex-col justify-center uppercase ml-6">
                                <h3 className="font-bold">Geovana</h3>
                                <span className="text-xs text-red">Atleta</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-80 h-80 p-5 bg-slate border-b-2 border-red rounded bg-no-repeat bg-right-bottom space-y-8" 
                    style={{backgroundImage: `url(${logoOpac})`}}>
                        <div className="flex">
                            <div className="w-16 h-16">
                                <img src={userC} className="w-full h-full rounded-2xl border border-red"/>
                            </div>

                            <div className="flex flex-col justify-center uppercase ml-6">
                                <h3 className="font-bold">João</h3>
                                <span className="text-xs text-red">Jornalista</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}