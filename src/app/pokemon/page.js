'use client'
import HeaderApi from "../components/headers/HeaderApi.js";
import PokemonCard from "../components/cards/PokemonCard.js";
import apiPokemonManager from "../hooks/apiPokemonManager.js";
import BtnPaginacionPokemon from "../components/buttons/BtnPaginacionPokemon.js";
import { useEffect } from "react";



const Pokemon = () => {

    const  [listPokemon,page,pagination,totalList,perPage] = apiPokemonManager();

    
   
    

    return (
            <div>
                <HeaderApi page="pokemon" />
                <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 2xl:grid-cols-4 gap-5  ">
                       
                    {
                        listPokemon.map((pokemon,index)=>{
                            return (
                                <PokemonCard key={index} data={pokemon} />
                            )
                        })
                    }

                        
                    </div>
                </div>
                <div className="w-full flex justify-center items-center p-7">
                    <BtnPaginacionPokemon page={page}  totalList={totalList} perPage={perPage} pagination={pagination} />
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