import PokemonFondo from "../../../../public/img/fondosCartas/fondoPokemon.svg"
import Image from "next/image";



const Pokemon = () => {

    return(
        <div className="flex flex-col w-full min-w-[300px] max-w-[360px] h-[200px] backImgPokemon">
            <div >
                
            </div>
            


        </div>
    )
}

export default Pokemon;


/*


div className="w-full  md:max-w-[360px] min-w-[300px]  flex ">
            <div className="w-full flex flex-col  realtive border-[2px] border-black bg-red-400 rounded-2xl ">
                <div className="w-full justify-center items-center flex  py-5 rounded-t-2xl">
                    <Image className="w-[150px]"
                    src={pokePrueba}
                    alt="Picture of the author" 
                    />
                </div>
                <div className="relative w-full h-[2px] border-slate-800 border ">
                    <div className=" absolute left-9 -top-[20px]  w-56  h-10 rounded-full  bg-slate-300  ">
                        <div></div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center bg-slate-100 py-6">
                    <div className=" flex  justify-center items-center border-[2px] rounded-3xl border-gray-400 px-8 py-4">
                        <div className="flex justify-between items-center gap-10 font-bold text-gray-400">
                            <div className="flex flex-col gap-y-1  items-center ">
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
                            <div className="flex flex-col gap-y-1 items-center">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

*/