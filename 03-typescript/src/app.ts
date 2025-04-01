const heroes = [
    { id:1, name: 'Batman', owner: 'DC' },
    { id:2, name: 'Superman', owner: 'DC' },
    { id:3, name: 'Flash', owner: 'DC' },
    { id:4, name: 'Green Lantern', owner: 'DC' }, 
]

const finderHeroById = (id) => {
return heroes.find( (hero) => hero.id === id );
}

const hero = finderHeroById(1);
console.log(hero?.name ?? 'No existe el héroe'); // Superman