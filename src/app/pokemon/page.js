'use client'
import HeaderApi from "../components/headers/HeaderApi.js";
import PokemonCard from "../components/cards/PokemonCard.js";
import apiPokemonManager from "../hooks/apiPokemonManager.js";
import { useEffect } from "react";



const Pokemon = () => {

    const  [listPokemon,page,pagination,totalList,perPage] = apiPokemonManager();

    useEffect(()=>{
        console.log(`estamos en la pagina ${page}`);
        console.log(listPokemon);
    },[page]);
   
    

    return (
            <div>
                <HeaderApi page="pokemon" />
                <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 2xl:grid-cols-4 gap-5  ">
                       
                     <div className="flex flex-row justify-between w-[400px] h-[60px] ">

                        <button
                            disabled={page===1}
                            onClick={()=>pagination(page-1)}
                            className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                        >Anterior</button>
                        <button
                            disabled ={page===Math.ceil(totalList/perPage)}
                            onClick={()=>pagination(page+1)}
                            className="w-[100px] h-full rounded-full bg-slate-300 text-slate-900"
                        >Siguiente</button>

                     </div>

                     <div>
                        {
                           listPokemon.map((pokemon,index)=>{
                            <p key={index} className="w-full h-10 bg-red-300">
                                {pokemon.name}
                            </p>

                           })
                        }
                     </div>
                        
                    </div>
                </div>
            </div>
    );
    
}



export default Pokemon;

/*
<PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>

*/