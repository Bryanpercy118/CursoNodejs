//es una funcion que crea otra funcion
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
//const {getUUID, getAge} = require('../plugins')

const buildMakePerson = ( { getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }
}


module.exports = {
    buildMakePerson,
}