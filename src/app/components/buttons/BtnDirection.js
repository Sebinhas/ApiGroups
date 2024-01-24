import Link from 'next/link'
import { FaCloud, FaUsers } from "react-icons/fa";
const BtnDirection = ({icon,title,dir}) =>{

   let renderIcon;
   switch (icon) {
      case 'cloud':
         renderIcon = <FaCloud/>
         break;
      case 'users':
         renderIcon = <FaUsers/>
         break;
   }
   


   return(
      <Link href={dir} className="w-[160px] h-[40px] bg-gray-500 flex flex-row rounded-full ">
         <div className="w-[40px] h-[40px] rounded-full bg-slate-50  flex justify-center items-center text-xl text-gray-500">
            {renderIcon}  
         </div>
			<div className="w-[100px] h-[40px] font-semibold flex justify-center items-center ">
				{title}
			</div>
      </Link>
   )

}
export default BtnDirection;