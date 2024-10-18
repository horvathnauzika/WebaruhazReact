import React from 'react';

export default function Sor(props){

    function kattintas(){
        props.kattintas(props.obj)
    }


    return(
        <tr>
            <td>{props.obj.cim}</td>
            <td><img src={props.obj.kep} alt="termek"></img></td>
            <td>{props.obj.leiras}</td>
            <td>{props.obj.ar}</td>
            <td><button type="button" className="btn btn-primary" onClick={()=>{kattintas()}}>Kosárba</button></td>
        </tr>
    )

}