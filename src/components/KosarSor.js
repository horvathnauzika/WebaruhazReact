import React from 'react';

export default function KosarSor(props){

    return(
        <tr>
            <td>{props.obj.cim}</td>
            <td><img src={props.obj.kep} alt="termek"></img></td>
            <td>{props.obj.ar}</td>
            <td><button type="button" className="btn btn-danger">Törlés</button></td>
        </tr>
    )

}