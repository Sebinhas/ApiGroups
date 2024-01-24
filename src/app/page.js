'use client'
import Header from "./components/index/Header.js";
import HeaderMovile from "./components/index/HeaderMovile.js";
import Card from "../app/components/cards/card.js";


const Home = () => {   
	return (
      <div className="w-full flex-col">
         <div>
            <HeaderMovile/>
            <Header/>
         </div>
         <div className="w-full flex justify-center py-5">
            <Card/>
         </div>
      </div>
   )
}

export default Home;