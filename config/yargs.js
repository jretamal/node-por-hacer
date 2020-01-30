const argv = require('yargs')
    .command("crear", "Crea una tarea por hacer.", {
        descripcion: {
            demand: true,
            alias: "d"
        }
    })
    .command("actualizar", "Actualiza la tarea por hacer.", {
        descripcion: {
            demand: true,
            alias: "d"
        },
        completado: {
            demand: true,
            default: true,
            alias: "c"
        }
    })
    .command("borrar", "Elimina una tarea.", {
        descripcion: {
            demand: true,
            alias: "d"
        }
    })
    .help().argv;

module.exports = {
    argv
}