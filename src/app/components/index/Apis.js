import Card from "./Card.js"

const Apis = () =>{
 return(
   <div className="w-full  h-full  flex justify-center items-center p-[20px]">

      <div className="w-full max-w-[800px] flex flex-col items-center justify-center">
         <Card title = "Pokemon" background="bg-red-400" backgroundHover="hover:bg-red-600" 					/>

		</div>

   </div>
 )
}
export default Apis

/*
<div className="w-full  h-full">
   <div className="w-full h-full bg-red-300  p-4 flex justify-center items-center">
         <div className="w-full flex  flex-col">
            <Card title = "Pokemon" background="bg-red-400" backgroundHover="hover:bg-red-600" 					/>
            <Card title = "Dragon Ball" background="bg-orange-400" backgroundHover="hover:bg-orange-600" 	/>
            <Card title = "DC Comics" background="bg-blue-400" backgroundHover="hover:bg-blue-600" 			/>
            <Card title = "Rick & Morty" background="bg-green-400" backgroundHover="hover:bg-green-600" 		/>
         </div>
      </div>
</div>
*/