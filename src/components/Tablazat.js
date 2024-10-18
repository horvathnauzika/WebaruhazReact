import React from 'react';
import Sor from "./Sor"

export default function Tablazat(props){

    function kattintas(adat){
        props.kattintas(adat)
    }

    return(
        <>
        <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Cím</th>
                <th>Kép</th>
                <th>Leírás</th>
                <th>Ár</th>
            </tr>
        </thead>
        <tbody>
            {props.lista.map((elem, index)=>{
                return <Sor obj={elem} key={index} kattintas={kattintas}/>
            })}
        </tbody>
        </table>

        </>
    )
}