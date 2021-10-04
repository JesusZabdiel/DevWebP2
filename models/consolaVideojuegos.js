const Sequelize = require("sequelize")


//tabla intermedia para solucionar la telación  M->M
const ConsolaVideojuego = (sequelize) =>{
    sequelize.define('consolaVideojuego', {
        idCV:{
            type: Sequelize.INTEGER,
            allowNul: false,
            primaryKey: true
        },  
        lanzamiento: Sequelize.STRING
    })
}


module.exports = ConsolaVideojuego