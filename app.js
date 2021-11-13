const fs= require("fs");//El modulo fs nos permite leer y escribir archivos del disco duro de node
//usar variable const cuando queremos que una variable no cambie o sabemos que no va a cambiar
//para requerir ese archivo se usa el metodo require() desde el archico que solicita al otro fichero, y se lo guarda dentro de una variable del mismo nombre del archivo a importar
//Si el modulo es creado o local se especifica dentro del parametro "./carpeta/nombreArchivo"
//No hace falta declarar la extension si es formato .js
let modulo= require("modulo");
let tareasArray= JSON(tareas.json);//Al pasar el archivo json a formato objeto o array se guarda el contenido del json dentro de una variable a usar a posteriori
let datos= tareasArray.readFileSync("./tareas.json","utf8");//el metodo fyleradsync tomas dos argumentos, la ruta de carpeta, y la codificacion del archivo
//la codificacion "utf8" hace referencia a la codificacion occidental y la correcta lectura de los archivos implementados bajo este lenguaje
//El modulo nativo método "fs.readFileSync()" sirve para leer y acceder a archivos de texto o strings que tengamos guardados en local 
const comando= process.argv[2];

switch (comando) {
    case "listar"://caso a comparar la condicion y en consecuencia arrojar un booleano
        console.log("Todas las tareas");//si es true se ejecutara este bloque de codigo, si no lo es el switch pasara al siguiente caso
        for (let i=0; i< tareasArray.length; i++) {
            return tareasArray[i].titulo;
        }
break;
    case "":
        break;
        default:
            break;
}
/*En un array solo se le asigna valor a cada indice, en cambio a un object que admite funciones
Los archivos .JSON son cadenas de texto, un formato sencillo
El this es recursivo y hace referencia la objeto
Las claves o keys de los strings, los toma tambein como objeto
Las propiedades de un objeto se pueden agrupar secuencialemente object.prop,prop
Un espacio vacio tiene informacion binaria*/


//El metodo module.exports sirve para compartir y exportar contenido de archivos, como objetos literales y arrays, con otras carpetas u otros archivos
//Para requerir ese archivo se usa el metodo require() desde el archico que solicita al otro fichero, y se lo guarda dentro de una variable del mismo nombre del archivo a importar
let modulo= require("modulo");
//Si el modulo es creado o local se especifica dentro del parametro "./carpeta/nombreArchivo"
//No hace falta declarar la extension si es formato .js