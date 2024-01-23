const Header = () =>{
   return(
      <header className="hidden  lg:block ">
         <div className=" w-full flex justify-between items-center h-[90px] bg-slate-800">
            <div className="text-6xl flex text-white h-full font-semibold w-1/2 justify-center items-center">   
               CODELAB
            </div>
            <div className="w-1/2 flex text-white gap-x-10 justify-end px-6">
               <button className="w-32 rounded-full h-9 font-medium bg-slate-600">APIS</button>
               <button className="w-32 rounded-full h-9 font-medium bg-slate-600">CONTAC US</button>
               <button className="w-32 rounded-full h-9 font-medium bg-slate-600">DEVELOPERS</button>
            </div>
         </div>
      </header>
   );
}

export default Header;