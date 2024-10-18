import React from 'react';

export default function KosarSor(props){

    
    function torles(){
        props.torles(props.obj)
    }

    return(
        <tr>
            <td>{props.obj.cim}</td>
            <td><img src={props.obj.kep} alt="termek"></img></td>
            <td>{props.obj.ar}</td>
            <td>1</td>
            <td><button type="button" className="btn btn-danger" onClick={()=>{torles()}}>Törlés</button></td>
        </tr>
    )

}