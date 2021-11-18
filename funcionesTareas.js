//Este archivo funciona como un archivo modular dado que se idean todas las funciones y comportamientos que luego exportare para usarlos cuanoo necesite


const fs= require("fs");//El modulo fs nos permite leer y escribir archivos del disco duro de node
//usar variable const cuando queremos que una variable no cambie o sabemos que no va a cambiar
//para requerir ese archivo se usa el metodo require() desde el archico que solicita al otro fichero, y se lo guarda dentro de una variable del mismo nombre del archivo a importar
//Si el modulo es creado o local se especifica dentro del parametro "./carpeta/nombreArchivo"
//No hace falta declarar la extension si es formato .js
//let modulo= require("modulo");
let tareasJson= fs.readFileSync("./tareas.json","utf8");//con el metodo readfilesync se lee el archivo json
// tomas dos argumentos, la ruta de carpeta, y la codificacion del archivo
//la codificacion "utf8" hace referencia a la codificacion occidental y la correcta lectura de los archivos implementados bajo este lenguaje
//El modulo nativo método "fs.readFileSync()" sirve para leer y acceder a archivos de texto o strings que tengamos guardados en local 
let tareasArray= JSON.parse(tareasJson);//Con el metodo parse pasar el archivo json a formato objeto o array se guarda el contenido del json dentro de una variable a usar a posteriori

let listarTareas= function(){
console.log("Todas las tareas");//si es true se ejecutara este bloque de codigo, si no lo es el switch pasara al siguiente caso
        for (let i=0; i< tareasArray.length; i++) {
            return tareasArray[i].titulo;
        }
    };
function listarTareasTerminadas () {
    let tareasTerminadas= tareasArray.filter(unaTarea=> {
        return unaTarea.estado=== "terminada";
    });
    console.log("**Tareas Terminadas**");
    tareasTerminadas.forEach(unaTarea => {console.log("* " + unaTarea.titulo);
});
};
function listarTareasPendientes () {
    let tareasPendientes= tareasArray.filter(unaTarea=> {
        return unaTarea.estado==="pendiente";
    });
console.log("**Tareas Pendientes**");
tareasPendientes.forEach(unaTarea=> {
    console.log("* "+ unaTarea.titulo);
});
};
function listarTareasEnProgreso () {
    let tareasEnProgreso= tareasArray.filter(unaTarea=> {
        return unaTarea.estado==="en progreso";
    });
    console.log("**Tareas En Progreso**");
    tareasEnProgreso.forEach(unaTarea=> {
        console.log("* " + unaTarea.titulo);
    });
};
module.exports= {listarTareasEnProgreso, listarTareasPendientes, listarTareasTerminadas, listarTareas};