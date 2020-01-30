/*
 *
 * $node app crear -d "Pasear al perro"
 * $node app actualizar -d "Pasear al perro" -c true
 */

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":

        let listado = porHacer.getListado();
        // console.log(listado);

        for (let tarea of listado) {
            console.log('======= POR HACER ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================');
        }

        break;
    case "actualizar":
        let actualizdo = porHacer.actualizar(argv.descripcion, argv.completado);
        // console.log(`Estado actualizacion: ${actualizado}`.yellow);

        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido.');
}