import React from "react";
import Slider from "react-slick";

import userA from "../../assets/userA.jpg";
import userB from "../../assets/userB.jpg";
import userC from "../../assets/userC.jpg";

import logoOpac from "../../assets/logo-opac.svg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="flex w-2/3">
                <div className="flex flex-col w-80 h-80 p-5 bg-slate border-b-2 border-red rounded bg-no-repeat bg-right-bottom space-y-8" 
                    style={{backgroundImage: `url(${logoOpac})`}}>
                        <div className="flex">
                            <div className="w-16 h-16">
                                <img src={userA} className="w-full h-full rounded-2xl border border-red"/>
                            </div>

                            <div className="flex flex-col justify-center uppercase ml-6">
                                <h3 className="font-bold">Leonardo</h3>
                                <span className="text-xs font-semibold text-red">Fisiculturista</span>
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
                                <span className="text-xs font-semibold text-red">Atleta</span>
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
                                <span className="text-xs font-semibold text-red">Jornalista</span>
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
                                <img src={userA} className="w-full h-full rounded-2xl border border-red"/>
                            </div>

                            <div className="flex flex-col justify-center uppercase ml-6">
                                <h3 className="font-bold">Leonardo</h3>
                                <span className="text-xs font-semibold text-red">Fisiculturista</span>
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
                                <span className="text-xs font-semibold text-red">Atleta</span>
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
                                <span className="text-xs font-semibold text-red">Jornalista</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem ornare accumsan faucibus cras. Porta varius bibendum.</p>
                        </div>
                </div>
    </Slider>
  )
}