import React from 'react';
import { useParams } from 'react-router-dom';


export function Orders () {
    let videogames = useSelector(state => state.games);
    const { attribute, order } = useParams();

    if (attribute === 'name' && order === 'asc'){
        //ordenar nombre de A a la Z
    } else if (attribute === 'name' && order === 'desc'){
        //ordenar nombre de Z a la A
    } else if (attribute === 'rating' && order === 'asc'){
        //ordenar rating de menor a mayor
    } else {
        //ordenar rating de mayor a menor
    }

    return (
        <div>
            
        </div>
    )
}