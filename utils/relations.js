function aplicarRelaciones(sequelize){
    //imprimir los modelos relacionados con el objeto de conexión
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const ConsolaVideojuego = sequelize.models.consolaVideojuego


    //Un videojuego puede jugarse en muchas consolas
    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego})

    //una consola tiene muchos vieojuegos
    Consola.belongsToMany(Videojuego,{through: ConsolaVideojuego})

    //En caso de relaciones 1->M
    //tName.hasMany()   --> tiene muchos
    //tName.belongsTo() --> tiene solo 1

}

module.exports = {aplicarRelaciones}