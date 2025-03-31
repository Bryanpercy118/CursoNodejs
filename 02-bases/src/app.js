// const { emailTemplate } = require('./js-foundation/01-template');
// require ('./js-foundation/02-destructuring');
//const {getUserById} = require ('./js-foundation/04-arrow');
// const { getUUID, getAge } = require('./plugins') factory
// const { buildMakePerson } = require ('./js-foundation/05-factory');
// const makePerson = buildMakePerson({ getUUID, getAge });
// const person = { name: 'Bryan Percy', birthdate: '1998-03-24' };
// const newPerson = makePerson(person);
// console.log(newPerson); fin del factory

const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then((pokemon) => console.log(pokemon))
    .catch((error) => console.error(error));