import Section01 from "../comporespon/Section01.js";
import Section02 from "../comporespon/Section02.js";
import Section03 from "../comporespon/Section03.js";
import Section04 from "../comporespon/Section04.js";


const responsive = () =>{

   return(
      <div className="p-2  lg:px-6">
			<Section01/>
			<Section02/>
         <Section03/>
			<Section04/>
      </div>
   )

}
export default responsive;