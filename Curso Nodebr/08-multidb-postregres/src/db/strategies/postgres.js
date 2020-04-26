const ICrud = require('./interfaces/interfaceCrud')

class Postgress extends ICrud{
    constructor() {
        super()
        this._driver = null
        this._herois = null
        this._connect()

    }
    async isConnected(){
        try{
            await this._driver.authenticate()
            return true
        }catch (error) {
            console.log('fail',error)
            return false;

        }
    }
    async defineModel(){
        this_herois = driver.define(
            'herois',
            {
              id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true,
              },
              nome: {
                type: Sequelize.STRING,
                required: true,
              },
              poder: {
                type: Sequelize.STRING,
                required: true,
              },
            },
            {
              //opcoes para base existente
              tableName: 'TB_HEROIS',
              freezeTableName: false,
              timestamps: false,

            },
          );
    }

    create(item) {
        console.log('item foi salvo em Postgress')
    }
    
    _connect(){
        this._driver = new Sequelize(
            'heroes', //database
            'fernandocardo', // user
            'minhasenhasecreta', //senha
            {
              host: 'localhost',
              dialect: 'postgres',
              // case sensitive
              quoteIdentifiers: false,
              // deprecation warning
              operatorsAliases: false
          
              // dialectOptions: {
              //   ssl: true,
              // },
            },
        );
    }
}

module.exports = Postgress