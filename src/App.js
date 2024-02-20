import './App.css';
import Perfil from './componentes/Perfiles'
import React, {useState} from 'react';
import Contador from './componentes/Contador';

function App() {
  const [contador, setContador]= useState(0);

  const users = [ {"nombre":"Johan",    "pais":"Bogotá", "imagen":"", "cargo":"Desarrollador Jr", "empresa":"", "description":"", "linkedin": 'https://www.linkedin.com/in/braismoure/', "github": "https://github.com/", "youtube": "https://www.youtube.com/"},
                  {"nombre":"Juan",     "pais":"Bogotá", "imagen":"", "cargo":"Desarrollador Jr", "empresa":"", "description":"", "linkedin": "https://www.linkedin.com/in/braismoure/", "github": "https://github.com/", "youtube": "https://www.youtube.com/"},
                  {"nombre":"Fernando", "pais":"Bogotá", "imagen":"", "cargo":"Desarrollador Jr", "empresa":"", "description":"", "linkedin": "https://www.linkedin.com/in/braismoure/", "github": "https://github.com/", "youtube": "https://www.youtube.com/"}
                ]
  return (
    <div className="App">
       <h1>Mis personajes favoritos</h1>
       {users.map((user) => (
        <Perfil 
        nombre={user.nombre}
        pais={user.pais}
        imagen={user.imagen}
        cargo={user.cargo}
        empresa={user.empresa}
        resena={user.description}
        linkedin={user.linkedin}
        github={user.github}
        youtube={user.youtube}
        />
       ))}

    </div>
  );
}

export default App;
