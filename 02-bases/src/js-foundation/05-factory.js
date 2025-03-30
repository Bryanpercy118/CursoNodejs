//es una funcion que crea otra funcion
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
const {getUUID, getAge} = require('../plugins')
const buildPerson = ({ name, birthdate }) => {
    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}

const obj ={ name: 'John', birthdate:'1998-03-24'}
const John = buildPerson( obj );

console.log(John);