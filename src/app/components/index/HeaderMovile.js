
import { IoMenu } from "react-icons/io5";
import Image from 'next/image'
import Logo from "../../../../public/img/Codelab.png"
import Logo2 from "../../../../public/img/Codelab2.png"

const HeaderMovile = () =>{
   return(
      <header className="w-full lg:hidden">
         <div className="w-full h-[90px] bg-slate-800 justify-center items-center ">
            <div className="w-full h-full pl-7 items-center flex text-4xl text-white">
            <Image className="md:hidden"
                  src={Logo2}
                  width={80}
                  height={450}
                  alt="Picture of the author"
            />
            <Image className="hidden md:block"
                  src={Logo}
                  width={350}
                  height={450}
                  alt="Picture of the author"
            />
            </div>
            <div>
               <IoMenu className="text-5xl text-cyan-50 absolute right-6 top-5 sm:right-7"/>
            </div>
      </div>
      </header>
      
   );
}

export default HeaderMovile;