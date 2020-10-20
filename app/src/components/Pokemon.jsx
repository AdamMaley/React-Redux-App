import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loadPokemon } from '../reducers/pokemon';

export const Pokemon = () => {
    const { pokemonName } = useParams();
    const pokemon = useSelector(
        state => state.pokemon.pokemon
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (!pokemon)
        dispatch(loadPokemon(pokemonName));
    }, [dispatch, pokemon, pokemonName]);

    return (
    <React.Fragment>
        {pokemon && (
        <div className="text-center">
            <h1>{pokemonName}</h1>
            <img 
                src={pokemon.sprites.front_default} 
                alt={pokemonName}/>
        </div>
        )}
    </React.Fragment>
    );
};
