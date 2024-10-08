import axios from "axios";
import { Pokemon } from "../interfaces/pokemon";

export const getPokemon=async(pokemonID:number):Promise<Pokemon>=>{
    const {data}= await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    // console.log(resp.data.name);
    
    return data;
}