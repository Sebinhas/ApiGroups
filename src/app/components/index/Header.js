import BtnDirection from "../buttons/BtnDirection";
const Header = () =>{
   return(
      <header className="hidden  lg:block ">
         <div className=" w-full flex justify-between items-center h-[90px] bg-slate-800">
            <div className="text-6xl flex text-white h-full font-semibold w-1/2 justify-center items-center">   
               CODELAB
            </div>
            <div className="w-1/2 flex text-white gap-x-6 justify-end px-6">

               <BtnDirection icon="cloud" title="Apis"  dir="/" />
               <BtnDirection icon="users" title="Developers" dir="developers" />   
               
            </div>
         </div>
      </header>
   );
}

export default Header;