'use client'
import Image from 'next/image'
const Pokemon = ({codigo, nombre, tipo }) => {

    let imgUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+codigo+".png";

    return (
        <div className="w-[280px] bg-gray-100 flex flex-col m-4 p-2 rounded-lg text-slate-900 ">

            <div className="flex flex-row justify-center "> 
                <div>
                    <Image
                        src={imgUrl}
                        width={160}
                        height={160}
                        alt="Picture of the author"
                        />
                </div>
            </div>

            <div className="flex flex-row justify-between mx-2 text-sm text-gray-400 font-medium"> 
                <div>#0{codigo}</div>
            </div>
            <div className="flex flex-row justify-between mx-2">  
                <div className='text-base font-semibold'>{nombre}</div>
                <div className='text-xs font-semibold p-1 px-4 rounded-full bg-slate-200  '>{tipo}</div>
            </div>
        </div>
    );

}

export default Pokemon;