import React, {useState} from 'react';

export default function ContadorGitHub(){

    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
        setNumero(numero + 1);
    };

    const disminuir = () =>{
        setNumero(numero - 1);
    };

    return (
                <div>
                    <button onClick={aumentar}>GitHub {numero}</button>
                </div>
            );
}