'use client'
import Header from "./components/headers/Header.js";
import ApiCard from "./components/cards/ApiCard.js";

const Home = () => {   
	return (
      <div className="w-full flex-col ">
         <Header/>
         <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 "> 
            <div className=" grid grid-cols-1  md:grid-cols-2 gap-5 ">

               <ApiCard color="red"       name="Pokemon"      />
               <ApiCard color="orange"    name="Dragon Ball"/>
               <ApiCard color="blue"      name="Heroes"/>
               <ApiCard color="emerald"   name="Rick & Morty"/>
               
            </div>
         </div>
      </div>
   )
}

export default Home;


