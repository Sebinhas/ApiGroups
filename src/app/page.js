'use client'
import Header from "./components/index/Header.js";
import HeaderMovile from "./components/index/HeaderMovile.js";


const Home = () => {   
	return (
      <div className="w-full flex-col">
         <div>
            <HeaderMovile/>
            <Header/>
         </div>
         <div>

         </div>
      </div>
   )
}

export default Home;