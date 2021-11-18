
const comando= process.argv[2];
let fnTareas= require("./funcionesTareas.js");//Requiero las funciones definidas dentro del archivo funcionesTareas.js;llamo a la funcionalidad
//Debo especificar la ubicacion del archivo con ./ al ser una libreria creada
switch (comando) {
    case "listar"://caso a comparar con la condicion y en consecuencia arrojar un booleano
        fnTareas.listarTareas();
        break;
    case "terminadas":
        fnTareas.listarTareasTerminadas();//se llama al metodo del objeto ya ejecutado con los parentesis
        break;
    case "progreso":
        fnTareas.listarTareasEnProgreso();
        break;
    case "pendiente":
        fnTareas.listarTareasPendientes();
        break;
    case undefined:
        console.log("Atención- Tienes que pasar una acción");//Sin palabra 
        break;
    default:
        console.log("No entiendo lo que quieres decir");//Palabra random
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
//let modulo= require("modulo");
//Si el modulo es creado o local se especifica dentro del parametro "./carpeta/nombreArchivo"
//No hace falta declarar la extension si es formato .js