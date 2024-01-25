'use client'
import Header from "./components/index/Header.js";
import HeaderMovile from "./components/index/HeaderMovile.js";
import ApiCard from "./components/cards/ApiCard.js";


const Home = () => {   
	return (
      <div className="w-full flex-col">
         <div>
            <HeaderMovile/>
            <Header/>
         </div>
         <div className="w-full flex justify-center items-center py-5 px-2">

            <div className="w-full  grid-cols-1 gap-2">
               <ApiCard title="df" />
               <ApiCard title="gh" />
            </div>
            
         </div>
      </div>
   )
}

export default Home;