const Card = ({title, background,backgroundHover}) => {
   return(
      <div className="w-full max-w-[300px] bg-slate-700  flex flex-col p-4">
         <div className="w-full flex justify-center items-center">
            <div className="w-[260px] h-[300px] bg-red-400">

            </div>

         </div>
         <div className="w-full">
            <div className="text-white text-[38px] font-semibold flex justify-center items-center">
               {title}
            </div>
            <div className={`btnVer ${backgroundHover} justify-center items-center  rounded-full font-bold text-[13px] flex bottom-4`}>
               ver mas..
            </div>
         </div>
        
          
      </div>
   )
}
export default Card;


/*

<div className="w-full flex-col shadow-neutral-400 shadow-md rounded-t-3xl rounded-b-lg  my-6 ">
         <div className="w-full h-64 bg-white rounded-t-3xl  ">

         </div>
         <div className={`w-full h-32 ${background} justify-center relative flex rounded-b-lg`}>
            <div className="text-white text-[38px] font-semibold absolute justify-center items-center">
               {title}
            </div>
            <div className={`btnVer ${backgroundHover}  rounded-full font-bold text-[13px] flex bottom-4`}>
               Ver mas..
            </div>
         </div>
      </div>

*/