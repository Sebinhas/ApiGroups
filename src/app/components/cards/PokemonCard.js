import Image from "next/image";
import PokemonPrueba from "../../../../public/img/fondosCartas/pokePrueba.png";
import PokemonLogo from "../../../../public/img/fondosCartas/PokemonLogo.webp";


const Pokemon = ({data}) => {

    let type = data.type[0];
    let background;
    let color;

    switch (type) {
        case 'fire':
        background = "bg-red-600"   
        color = "red-600" 
            break;
        case 'grass':
        background = "bg-lime-500"  
        color = "lime-600"   
            break;
        case 'water':
        background = "bg-blue-600"
        color = ""    
            break;
        case 'poison':
        background = "bg-violet-600"
            break;
        case 'bug':
        background = "bg-green-600"     
            break;
        case 'normal':
        background = "bg-[rgb(198,153,166)]"
            break;
        case 'dark':
        background = "bg-gray-600"
            break;
        case 'electric':
        background = "bg-yellow-400"
            break;
        case 'ice':
        background = "bg-sky-600"
            break;
        case 'fairy':
        background = "bg-rose-600"
            break;
        case 'ground':
        background = "bg-amber-700"
            break;
        case 'fighting':
        background = "bg-orange-600"
            break;
        case 'psychic':
        background = "bg-pink-600"
            break;
        case 'rock':
        background = "bg-yellow-900"
            break;
        case 'ghost':
        background = "bg-indigo-700"
            break;
        case 'dragon':
        background = "bg-cyan-600"
            break;
        case 'steel':
        background = "bg-teal-600"
            break;
        default:
            break;
    }
    
    

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
                            <div className={`uppercase flex justify-center items-center w-20 ${background} font-semibold text-slate-100 text-[14px] rounded-full`}>
                                {data.type[0]}
                            </div>
                        </div>
                        
                        <div className={`flex justify-center items-center min-w[300px] max-w-[360px] h-[200px] ${background} bg-opacity-[0.4] rounded-t-[20px]`}>
                            
                            <div className="w-40">

                                <Image 
                                width={160}
                                height={100}
                                
                                src={data.ThumbnailImage}
                                alt=""
                                />

                            </div>
                            
                            
                        </div>
                    </div>    
                    <div className="relative w-full">
                        <div className={`flex justify-center items-center absolute left-9 top-[-20px]  w-56  h-10 rounded-full bg-sky-500`}>
                            <div className={` absolute bg-slate-200 w-8 h-8 rounded-full left-1 flex justify-center items-center text-[12px] text-sky-500 font-semibold`}>
                                {data.number}
                            </div>
                            <div className="uppercase text-xl font-bold text-slate-200">
                                {data.name}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center bg-sky-100 pt-9 pb-5 rounded-b-[20px]">
                        <div className={`flex justify-center items-center border-[3px] rounded-3xl border-sky-500`}>
                            <div className="flex justify-between items-center gap-10 font-bold py-5 px-6 ">
                                <div className={`uppercase flex flex-col gap-y-1 items-center text-${color} `}>
                                    <div>
                                        weakness                                         
                                    </div>
                                    <div>
                                        abilities
                                    </div>
                                    <div>
                                        weight
                                    </div>
                                    <div>
                                        height
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 items-center text-slate-500">
                                    <div>
                                        {data.weakness[0]}
                                    </div>
                                    <div>
                                        {data.abilities[0]}
                                    </div>
                                    <div>
                                        {data.weight}
                                    </div>
                                    <div>
                                        {data.height}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
    )
}

export default Pokemon;
