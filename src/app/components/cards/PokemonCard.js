import Image from "next/image";
import PokemonPrueba from "../../../../public/img/fondosCartas/pokePrueba.png";
import PokemonLogo from "../../../../public/img/fondosCartas/PokemonLogo.webp";


const Pokemon = () => {

    
    return(
        <div className="w-full flex flex-col">
            <div className="relative flex flex-col w-full min-w-[300px] max-w-[360px] h-[200px] backImgPokemon rounded-t-[20px]">
                <div className="flex justify-between w-full absolute px-2 py-3 top-0 ">
                    <div>
                        <Image className="w-[70px]"
                            src={PokemonLogo}
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center items-center w-20 bg-sky-600 font-semibold text-slate-100 text-[14px] rounded-full">
                        WATER
                    </div>
                </div>
                
                <div className="flex justify-center items-center min-w[300px] max-w-[360px] h-[200px] bg-sky-600 bg-opacity-[0.4] rounded-t-[20px]">
                    <Image className="w-40"
                    src={PokemonPrueba}
                    alt=""
                    />
                </div>
            </div>    
            <div className="relative w-full">
                <div className="flex justify-center items-center absolute left-9 top-[-20px]  w-56  h-10 rounded-full bg-sky-500">
                    <div className="absolute bg-slate-200 w-8 h-8 rounded-full left-1 flex justify-center items-center text-[14px] text-sky-500 font-semibold">
                        001
                    </div>
                    <div className="text-xl font-bold text-slate-200">
                        POKEMON
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-sky-100 pt-9 pb-5 rounded-b-[20px]">
                <div className="flex justify-center items-center border-[3px] rounded-3xl border-sky-500">
                    <div className="flex justify-between items-center gap-10 font-bold py-5 px-6 ">
                        <div className="flex flex-col gap-y-1 items-center text-sky-500">
                            <div>
                                HEALTH  
                            </div>
                            <div>
                                DEFENCE
                            </div>
                            <div>
                                ATTACK
                            </div>
                            <div>
                                HABITAT
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1 items-center text-slate-500">
                            <div>
                                500PH
                            </div>
                            <div>
                                300PD
                            </div>
                            <div>
                                ATTACK
                            </div>
                            <div>
                                HABITAT
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        
    )
}

export default Pokemon;
