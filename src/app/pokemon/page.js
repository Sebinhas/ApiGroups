import HeaderApi from "../components/headers/HeaderApi.js";
import Image from "next/image.js";
import PokemonCard from "../components/cards/PokemonCard.js";
import Pokemones from "../db/pokemones.json";


const Pokemon = () => {

    Pokemones.forEach(element => {
        console.log(element);
    });

    return (
            <div>
                <HeaderApi page="pokemon" />
                <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center py-5 ">.
                    <div className="grid grid-cols-1 gap-y-5  ">
                        <PokemonCard/>
                        <PokemonCard/>
                        <PokemonCard/>
                    </div>
                    </div>
            </div>
    );
    
}



export default Pokemon;