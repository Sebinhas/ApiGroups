
import { IoMenu } from "react-icons/io5";

const HeaderMovile = () =>{
   return(
      <header className="w-full lg:hidden">
         <div className="w-full h-[90px] bg-slate-800 justify-center items-center ">
            <div className="w-full h-full justify-center items-center  flex text-4xl text-white">
               CODELAB
            </div>
            <div>
               <IoMenu className="text-5xl text-cyan-50 absolute right-2 top-5 sm:right-4" />
            </div>
      </div>
      </header>
      
   );
}

export default HeaderMovile;