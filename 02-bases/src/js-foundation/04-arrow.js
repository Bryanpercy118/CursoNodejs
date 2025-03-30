//Funciones de Retorno
// Callback: función que se pasa como argumento a otra función
// Se ejecuta después de que la función principal haya terminado su ejecución

const users = [
  { id:1, name: "Juan"},
  { id:2, name: "Pedro" },
  { id:3, name: "Maria" },
  { id:4, name: "Jose" },
  { id:5, name: "Luis" },
];



const getUserById = ( id, callback )=> {
  const user = users.find( (user) => user.id === id );
 (user)
 ? callback(null, user)
 : callback(new Error('User not found', id));
 //Regresan el valor basado en el callback
}

module.exports = {
  getUserById
};