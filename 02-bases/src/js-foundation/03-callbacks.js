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



function getUserById( id, callback ){
  const user = users.find( function (user){
    return user.id === id;
  });
  if (!user) {
    return callback(new Error('User not found', id));
  }
  return callback(null, user);
}

module.exports = {
  getUserById
};