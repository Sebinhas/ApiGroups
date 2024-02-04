import BtnDirection from '../buttons/BtnDirection'
import { IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import Logo from '../../../../public/img/Codelab.png'
import Logo2 from '../../../../public/img/Codelab2.png'

const Header = () => {
   return (
      <div className="w-full h-[80px] bg-slate-800">
         <div className="w-full h-full flex justify-between items-center text-white">
            <div className="px-[26px]">
               <Image
                  className="hidden sm:block"
                  src={Logo}
                  width={350}
                  height={450}
                  alt="Picture of the author"
               />
               <Image
                  className="sm:hidden"
                  src={Logo2}
                  width={80}
                  height={450}
                  alt="Picture of the author"
               />
            </div>
            <div className="px-[20px] lg:hidden">
               <IoMenu className="text-5xl text-cyan-50  " />
            </div>
            <div className="px-[20px] hidden lg:block ">
               <div className=" flex  flex-row gap-x-6 ">
                  <BtnDirection icon="cloud" title="Apis" dir="/" />
                  <BtnDirection
                     icon="users"
                     title="Developers"
                     dir="developers"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header
