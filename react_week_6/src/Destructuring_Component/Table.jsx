import React from 'react';
import cars from './index';



const Table = () => {
    const [honda, tesla] = cars;

    // For First set of objects
    const {model: hondaModel, popularColors: [hondaColor1], speedStats: {topSpeed: hondaSpeed}} = honda;

    // For Second set of object
    const {model: teslaModel, popularColors: [teslaColor1], speedStats: {topSpeed: teslaSpeed}} = tesla;


  return (
    <div>
        <table border={2} style={{borderColor: "#770099", borderStyle: "solid"}} >
            <tr>
                <th style={{padding: "7px"}}>Brand</th>
                <th style={{padding: "7px"}}>Top Speed</th>
                <th style={{padding: "7px"}}>Top Color</th>
            </tr>

            <tr>
                <td style={{padding: "7px"}}>{hondaModel}</td>
                <td style={{padding: "7px"}}>{hondaSpeed}</td>
                <td style={{padding: "7px"}}>{hondaColor1}</td>
            </tr>

            <tr>
                <td style={{padding: "7px"}}>{teslaModel}</td>
                <td style={{padding: "7px"}}>{teslaSpeed}</td>
                <td style={{padding: "7px"}}>{teslaColor1}</td>
            </tr>
        </table>

        < br />

        <table border={2} style={{borderColor: "#000099", borderStyle: "solid"}} >
            <tr>
                <th style={{padding: "7px"}}>Brand</th>
                <th style={{padding: "7px"}}>Top Speed</th>
                <th style={{padding: "7px"}}>Top Color</th>
            </tr>

            <tr>
                <td style={{padding: "7px"}}>{hondaModel}</td>
                <td style={{padding: "7px"}}>{hondaSpeed}</td>
                <td style={{padding: "7px"}}>{hondaColor1}</td>
            </tr>

            <tr>
                <td style={{padding: "7px"}}>{teslaModel}</td>
                <td style={{padding: "7px"}}>{teslaSpeed}</td>
                <td style={{padding: "7px"}}>{teslaColor1}</td>
            </tr>
        </table>


    </div>
  )
}

export default Table