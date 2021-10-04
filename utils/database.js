//Objeto de conexion

const Sequelize = require("sequelize")
const {aplicarRelaciones} = require("./relations")

//DBName, User, Pass, 
const sequelize = new Sequelize('SebasYJesus', 'user3', 'root', {
    dialect: 'mysql',  //port 3036
    host: '54.173.202.133', 
    define: {
        //Evitar que se ponga createdAt y updatedAt
        timestamps: false,
        //evitar plural
        freezeTableName: true
    }
})


//carga de las definiciones de los modelos
const modelDefiners = [
    //modelos definidos dentro de la carpeta models
    require('../models/consolas.js'),
    require('../models/videojuegos.js'),
    require('../models/consolaVideojuego.js')
]


//Adherir los modelos al objeto de conexión 'sequelize'
for(const modelDefiner of modelDefiners)
    modelDefiner(sequelize)

//Realizar las relaciones entre las tablas de la DB
aplicarRelaciones(sequelize)

//este objeto de conexión ya tiene todos los elementos necesarios cargados --> modelos, etc
module.exports = sequelize