// Encuentra los nombres más cortos y transforma su formato 
// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 
// 'Pablo']. Queremos realizar varias tareas con esta lista: 
// o Primero, filtra los nombres que tengan menos de 5 letras. 
// o Luego, transforma los nombres resultantes para que estén en mayúsculas. 
// o Finalmente, construye una frase que diga: "Los nombres 
// seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas. 
// Al final, imprime la frase en la consola. 

let nombresPer = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];
let cortos = nombresPer.filter(nombre => nombre.length < 5);

let mayus = cortos.map(nombre => nombre.toUpperCase());
let frase = 'Los nombres seleccionados son: ' + mayus.join(", ");

console.log(frase);

// Calcula el total de ventas de productos seleccionados 
// Supón que tienes una lista de productos con sus precios en formato de 
// objeto: 
// const products = [ 
// { name: 'Laptop', price: 1000 }, 
// { name: 'Mouse', price: 25 }, 
// { name: 'Teclado', price: 50 }, 
// { name: 'Monitor', price: 200 }, 
// { name: 'Audífonos', price: 75 } 
// ]; 
// Queremos: 
// o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
// o Obtener solo los nombres de esos productos. 
// o Calcular el precio total sumando los precios de los productos 
// seleccionados. 
// o Imprime el total y los nombres de los productos seleccionados en la 
// consola. 

const products = [ 
  { name: 'Laptop', price: 1000 }, 
  { name: 'Mouse', price: 25 }, 
  { name: 'Teclado', price: 50 }, 
  { name: 'Monitor', price: 200 }, 
  { name: 'Audífonos', price: 75 } 
];

const seleccionados = products.filter(product => product.price >= 50);
const nombres = seleccionados.map(product => product.name);
const total = seleccionados.reduce((acum, product) => acum + product.price, 0);

console.log('Productos seleccionados: ', nombres.join(", "));
console.log('Precio total: ',total);

// Encuentra la película más corta y analiza los títulos largos 
// Supón que tienes una lista de películas con su duración en minutos: 
// const movies = [ 
// { title: 'El Señor de los Anillos', duration: 200 }, 
// { title: 'Inception', duration: 148 }, 
// { title: 'Matrix', duration: 136 }, 
// { title: 'Toy Story', duration: 81 }, 
// { title: 'Coco', duration: 105 } 
// ]; 
// Queremos: 
// o Encontrar la película más corta en duración. 
// o De las películas restantes, quedarnos con aquellas cuyo título tenga 
// más de 10 caracteres. 
// o Crear una lista de los títulos largos en minúsculas. 
// o Imprime en la consola: 
// o El título de la película más corta. 
// o La lista de títulos largos en minúsculas. 

const movies = [ 
  { title: 'El Señor de los Anillos', duration: 200 }, 
  { title: 'Inception', duration: 148 }, 
  { title: 'Matrix', duration: 136 }, 
  { title: 'Toy Story', duration: 81 }, 
  { title: 'Coco', duration: 105 } 
];

const peliculaCorta = movies.reduce((min, movie) => movie.duration < min.duration ? movie : min, movies[0]);
const titulosLargos = movies
 .filter(movie => movie.title.length > 10 && movie.title !== peliculaCorta.title)
 .map(movie => movie.title.toLowerCase());

 console.log('Titulo de la pelicula más corta: ', peliculaCorta.title);
 console.log('Titulos largos en minúsculas: ', titulosLargos);