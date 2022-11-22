import React from 'react';
import Matematica from '../assetss/imagemates.jpg';

function Card () {
    return (
        <div className= "card">
            <img src="{Matematica]" alt=""/>
            <div className= "card-body">
                <h4 className="card-title">Matemática</h4>
                 <p className="card-text">
                    {/*aca va información de los profesores,horarios y lugar de clase, insertar por base de datos*/}
                 </p>

            </div>

        </div>


    )


}

export default Card; 