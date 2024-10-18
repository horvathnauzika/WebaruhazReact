import React from 'react';
import Sor from "./KosarSor"

export default function Tablazat(props){

    function torles(adat){
        props.torles(adat)
    }

    return(
        <>
        <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Cím</th>
                <th>Kép</th>
                <th>Ár</th>
                <th>Darabszám</th>
                <th>Törlés</th>
            </tr>
        </thead>
        <tbody>
            {props.lista.map((elem, index)=>{
                return <Sor obj={elem} key={index} torles={torles}/>
            })}
        </tbody>
        </table>

        </>
    )
}