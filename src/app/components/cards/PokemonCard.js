import Image from "next/image";
import PokemonPrueba from "../../../../public/img/fondosCartas/pokePrueba.png";
import PokemonLogo from "../../../../public/img/fondosCartas/PokemonLogo.webp";


const Pokemon = ({data}) => {

    let type = data.type[0];
    let background;
    let background2;
    let text;
    let border;

    switch (type) {
        case 'fire':
        background = "bg-red-500"   
        text = "text-red-600" 
        border = "border-red-500"
        background2 = "bg-red-100"
            break;
        case 'grass':
        background = "bg-lime-500"  
        text = "text-lime-600"   
        border = "border-lime-500"
        background2 = "bg-lime-100"
            break;
        case 'water':
        background = "bg-blue-500"
        text = "text-blue-600"  
        border = "border-blue-500"
        background2 = "bg-blue-100"  
            break;
        case 'poison':
        background = "bg-violet-500"
        text = "text-violet-600"
        border = "border-violet-500"
        background2 = "bg-violet-100"
            break;
        case 'bug':
        background = "bg-green-500"    
        text = "text-green-600"
        border = "border-green-500"
        background2 = "bg-green-100" 
            break;
        case 'normal':
        background = "bg-[rgb(198,153,166)]"
        text = "text-[rgb(174,91,139)]"
        border = "border-[rgb(198,153,166)]"
        background2 = "bg-[rgb(249,196,226)]"
            break;
        case 'dark':
        background = "bg-gray-600"
        text = "text-gray-600"
        border = "border-gray-500"
        background2 = "bg-gray-100"
            break;
        case 'electric':
        background = "bg-yellow-400"
        text = "text-yellow-600"
        border = "border-yellow-500"
        background2 = "bg-yellow-100"
            break;
        case 'ice':
        background = "bg-sky-600"
        text = "text-sky-600"
        border = "border-sky-500"
        background2 = "bg-sky-100"
            break;
        case 'fairy':
        background = "bg-rose-600"
        text = "text-rose-600"
        border = "border-rose-500"
        background2 = "bg-rose-100"
            break;
        case 'ground':
        background = "bg-amber-700"
        text = "text-amber-600"
        border = "border-amber-500"
        background2 = "bg-amber-100"
            break;
        case 'fighting':
        background = "bg-orange-600"
        text = "text-orange-600"
        border = "border-orange-500"
        background2 = "bg-orange-100"
            break;
        case 'psychic':
        background = "bg-pink-600"
        text = "text-pink-600"
        border = "border-pink-500"
        background2 = "bg-pink-100"
            break;
        case 'rock':
        background = "bg-yellow-800"
        text = "text-yellow-900"
        border = "border-yellow-800"
        background2 = "bg-yellow-100"
            break;
        case 'ghost':
        background = "bg-indigo-700"
        text = "text-indigo-800"
        border = "border-indigo-700"
        background2 = "bg-indigo-100"
            break;
        case 'dragon':
        background = "bg-cyan-500"
        text = "text-cyan-600"
        border = "border-cyan-500"
        background2 = "bg-cyan-100"
            break;
        case 'steel':
        background = "bg-teal-500"
        text = "text-teal-600"
        border = "border-teal-500"
        background2 = "bg-teal-100"
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
                        <div className={`flex justify-center items-center absolute left-9 top-[-20px]  w-56  h-10 rounded-full ${background} ${text} `}>
                            <div className={` absolute bg-slate-200 w-8 h-8 rounded-full left-1 flex justify-center items-center text-[12px] font-semibold b `}>
                                {data.number}
                            </div>
                            <div className="uppercase text-xl font-bold text-slate-200">
                                {data.name}
                            </div>
                        </div>
                    </div>
                    <div className={`w-full flex justify-center items-center ${background2} pt-9 pb-5 rounded-b-[20px]`}>
                    <div className={`flex justify-center items-center border-[3px] rounded-3xl ${border} `}> 
                            <div className="flex justify-between items-center gap-10 font-bold py-5 px-6 ">
                                <div className={`uppercase flex flex-col gap-y-1 items-center ${text} `}>
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
