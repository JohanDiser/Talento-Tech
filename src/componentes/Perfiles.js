import React from "react";
import '../estilos/perfiles.css'
import Contador from "./Contador";

function Perfil(props){

    return(
        <div className='contenedor-perfil'>

            <div className="config-container">

                <div className="content-info">

                    <div className="imagen-perfil">
                        <img className='imagen-perfil' src={require(`../imagenes/brais.png`)} alt='Foto de Brais' />
                    </div>

                    <div className="config-text">

                        <div>
                            <p>Nombre: {props.nombre} </p>
                        </div>

                        <div>
                            <p>Pais: {props.pais} </p>
                        </div>

                        <div>
                            <p>Cargo: {props.cargo} </p>
                        </div>

                        <div>
                            <p>Empresa: {props.empresa} </p>
                        </div>

                    </div>
                    
                </div>

                <div>
                    <p>Reseña: {props.resena}</p>
                </div>

                <div className="count-button">
                        
                    <Contador
                        name="LinkedIn"
                        url={props.linkedin}
                    />
                    
                    <Contador
                        name="GitHub"
                        url={props.github}
                    />

                    <Contador
                        name="YouTube"
                        url={props.youtube}
                    />
                 
                </div>

            </div>
            
        </div>
    )
};

export default Perfil;