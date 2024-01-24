import BtnDirection from "../buttons/BtnDirection";
import Image from 'next/image'
import Logo from '../../../../public/img/Codelab.png'

const Header = () =>{
   return(
      <header className="hidden  lg:block ">
         <div className=" w-full flex justify-between items-center h-[90px] bg-slate-800">
            <div className="text-6xl flex text-white h-full font-semibold w-1/2 pl-7 items-center">   
               <Image
                  src={Logo}
                  width={350}
                  height={450}
                  alt="Picture of the author"
               />
            </div>
            <div className="w-1/2 flex text-white gap-x-6 justify-end px-6">

               <BtnDirection icon="cloud" title="Apis"  dir="/" />
               <BtnDirection icon="users" title="Developers" dir="developers"/>   
               
            </div>
         </div>
      </header>
   );
}

export default Header;