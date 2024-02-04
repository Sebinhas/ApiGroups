import { IoMenu, IoArrowBackCircle } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'
import dragon from '../../../../public/img/logosHeaders/dragon.svg'
import heroes from '../../../../public/img/logosHeaders/heroes.svg'
import RickAndMorty from '../../../../public/img/logosHeaders/rickandmorthy.svg'

import Image from 'next/image'

const HeaderApi = ({ page }) => {
   let img
   let colorBack
   let nameHeader
   let search

   switch (page) {
      case 'pokemon':
         img = dragon
         colorBack = 'bg-red-500'
         nameHeader = 'Pokemon'
         break
      case 'dragonBall':
         img = dragon
         colorBack = 'bg-orange-500'
         nameHeader = 'Dragon Ball'
         break
      case 'heroes':
         img = heroes
         colorBack = 'bg-blue-500'
         nameHeader = 'Heroes'
         break
      case 'rickandmorty':
         img = RickAndMorty
         colorBack = 'bg-emerald-400'
         nameHeader = 'Rick & Morty'
         break
      default:
         break
   }

   return (
      <div className={`w-full h-20 ${colorBack}`}>
         <div className="w-full h-full flex justify-between items-center">
            <div className="flex px-6 ">
               <Image
                  className=" w-[65px] "
                  src={img}
                  alt="Picture of the author"
               />
               <div className="px-5 font-sans font-semibold hidden sm:block text-5xl">
                  {nameHeader}
               </div>
            </div>
            <div className=" px-6">
               <IoMenu className=" text-5xl " />
            </div>
            <div className="hidden">
               <div className=" h-12 relative items-center flex px-6">
                  <input className=" border-2 border-slate-800 text-lg text-slate-800  w-72 px-3 h-9 rounded-3xl outline-none" />
                  <div className="absolute right-7 top-0 h-12 w-10   flex justify-center items-center">
                     <IoIosSearch className="text-slate-800 text-3xl cursor-pointer" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderApi
