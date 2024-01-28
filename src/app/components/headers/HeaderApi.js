import { IoMenu } from "react-icons/io5";
import Image from "next/image";

const HeaderApi = () => {
    return (
        <div className="w-full h-20 bg-slate-600">
            <div className="w-full h-full flex justify-between items-center">
                <div className="px-[26px]">
                    Logo
                </div>
                <div>
                    <IoMenu className="text-xl"/>
                </div>
            </div>
        </div>
    );
}
 
export default HeaderApi;