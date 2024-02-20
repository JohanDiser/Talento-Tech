import React, {useState} from 'react';

export default function Contador(props){
    console.log(props)
    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero + 1);
    };

    const disminuir = () =>{
        setNumero(numero - 1);
    };

    const abrirURL = () => {
        aumentar();  // Llama a la función aumentar antes de abrir la URL
        window.open(props.url, '_blank');
    };

    return (
                <div>
                    <button onClick={abrirURL}> {props.name} {numero}</button>
                </div>
            );
}