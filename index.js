const render = async () => {
    // const nombre = sessionStorage.getItem("nombre");
    // // alert(nombre);

    // sessionStorage.setItem("clave", "algun valor");
//     const persona = {
//     id: 1,
//     nombre: "Daniela",
// }; 
//     console.log(typeof persona);

//     const personaStr = JSON.stringify(persona);
//     console.log (typeof personaStr);
//     console.log (persona, personaStr);

//     localStorage.setItem("persona", personaStr);

//     const personaStorage = localStorage.getItem("persona");

//     const personaObjeto = JSON.parse(personaStorage);

//     console.log (typeof personaStorage, typeof personaObjeto);

const personas = [ 
    {
        nombre: "Daniela",
    },
    {
        nombre:"Ana"
    }
]
    const personasStr = JSON.stringify(personas);
    localStorage.setItem ("personas", personasStr);

    const personaStorage = JSON.parse(localStorage.getItem("personas"));
    personaStorage.push({nombre: "predro"});

    localStorage.setItem("personas", JSON.stringify(personaStorage));
};

document.addEventListener("DOMContentLoaded", render);