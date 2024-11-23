let librosColeccion=[{
Nombre:"Escalofríos de FazbearFive Nights at Freddy's: Fazbear Frights #5: Bunny Call",
Paginas:240,
Autor:"Scott Cawthon",
Genero:["Terror",],
Disponible:true
},{
Nombre:"El arte de la guerra",
Paginas:152,
Autor:"Sun Tzu",
Genero:["Tratado","No Ficcion"],
Disponible:false 
}];


//Nuevo libro
//Agrega aqui los libros que quieres añadir dentro del array

nuevoLibro =[{
Nombre:"Manual De Carreño",
Paginas:440,
Autor:"Manuel Antonio Carreño",
Genero:["Etiqueta","Civismo"],
Disponible:true
},{
Nombre:"50 Sombras de Grey",
Paginas:540,
Autor:"E. L. James",
Genero:["literatura romántico-erótica (+18)","Romance"],
Disponible:false
}];


//Funcion 1 | Info del libro

function informacionLibro(object){
    let Disponible = ""
    if (object.Disponible === true) { 
        Disponible = "Disponible"
    }else{
        Disponible = "Agotado"
    }
    return(`El Libro ${object.Nombre}, tiene ${object.Paginas} Paginas, fue escrito por ${object.Autor} y es del genero "${object.Genero}" y se encuentra ${Disponible}`)
}

//Funcion 2 | imprimir lista de libros

function imprimirLibros(){
    for (let index = 0; index < librosColeccion.length; index++) {
        console.log(index+1,". ",librosColeccion[index].Nombre)
        
    }
    
}

//Funcion 3 | Agregar nuevos libros

function AgregarLibros(){
    for (let index = 0; index < nuevoLibro.length; index++) {
        const element = nuevoLibro[index];
        librosColeccion.push(element)
    }
}
AgregarLibros()//para que se agreguen los libros nuevos
//Comandos

//ImprimirLibros()
//Console.log(InformacionLibro(librosColeccion[numero]))

imprimirLibros()
console.log(informacionLibro(librosColeccion[3]))