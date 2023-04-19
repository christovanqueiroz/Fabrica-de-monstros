import React from "react";
import Background from "../assets/background1.svg"
import Logo from "../assets/logo.svg"

export default function Head() {
    return (
        <section className=
            "flex flex-col min-h-screen min-w-screen justify-between bg-no-repeat bg-right-top"
        style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "795px",
        }}>
            <div className="flex flex-col p-20 space-y-8">
                <img src={Logo} className="w-48 h-16"/>

                <h1 className="text-4xl font-bold w-1/2">Transforme o seu corpo
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

            <div className="flex flex-col">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt hic quasi dolorum error unde quibusdam. <br/> Animi doloribus fuga consequuntur dolore eligendi saepe. Perferendis ad modi officiis doloribus non eligendi?</h1>
            </div>
        </section>
    )
}