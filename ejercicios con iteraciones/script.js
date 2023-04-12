


// Escribir un bucle for que itere sobre un array de números y muestre cada número por consola.
function recorrerarr(arr){
    for(let arrs of arr){
        console.log(arrs)
    }
}
// recorrerarr([1,3,4,5,6,7,3,5])

// Escribir un bucle while que itere desde 0 hasta 10 y muestre cada número por consola.
function whiles(){
    let num = 10;
    let i = 0
    while(i < num){
        i++
        console.log(i)
    }
}
// whiles()

// Escribir un bucle for que itere desde 0 hasta 10 y muestre solo los números pares por consola.
function pares(){
    for(let i = 0; i < 10; i++){
        if(i % 2 !== 0){
            continue
        }
        console.log(i)
    }
}
// pares()

// Escribir un bucle for que itere desde 0 hasta 10 y muestre solo los números impares por consola.
function pares(){
    for(let i = 0; i < 10; i++){
        if(i % 2 === 0){
            continue
        }
        console.log(i)
    }
}
pares()


// Escribir un bucle for que itere sobre un array de strings y muestre cada string por consola.
function arrstrin(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// arrstrin(["hola","soy","pablo"])

// Escribir un bucle for que itere sobre un objeto y muestre cada clave y su valor por consola.
function objeto(obj){
    for(const key in obj){
        console.log(`${key},${obj[key]}`)
    }
}
objeto({a:"hola",b:"soy",c:"pablo"})


// Escribir un bucle for que itere sobre un array de números y sume todos los números.

function sumararr(arr){
    let sum = 0
    for(let i  = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    return console.log(sum)
}
sumararr([2,2,2,2,2])
// Escribir un bucle for que itere sobre un array de números y calcule el promedio de los números.
function multiplicararr(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    let promedio = sum / arr.length
    return console.log(promedio)}
multiplicararr([2,2,2,2,2,3,2])


// Escribir un bucle for que itere sobre un array de strings y cuente cuántas palabras tienen más de 5 caracteres.
function contarpalabrasconmasde5(arr){
    let contador = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 5 ){
            contador++
        }
    }
    return console.log(contador)
}
contarpalabrasconmasde5(["hola","caracteres","juanjose","sou","pablomedina","carlistos"])


// Escribir un bucle for que itere sobre un array de números y cuente cuántos números son mayores que 10.
function numerosmayoresque10(arr){
    let contador = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            contador++
        }
    }
    return console.log(`hay ${contador} numeros mayores que 10`)
}
numerosmayoresque10([1,2,2,10,11,11,12,13,20,0,2])

// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad específica.
function iterarArrObj(arr){
for(let i = 0; i < arr.length; i++){
    if('jose' in arr[i]){
        console.log(arr[i])
    }
}
}
iterarArrObj([
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Juan', jose: 30 },
    { nombre: 'María', jose: 40 },
    { nombre: 'Pedro', edad: 35 },
  ])


// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad con un valor específico.
function ropiedad(arr){
    for(let i = 0; i < arr.length; i++){
        if("edad" in arr[i] && arr[i].edad > 18){
            console.log(`${arr[i].nombre} tienen ${arr[i].edad}`)
        }if("edad" in arr[i] && arr[i].edad < 18){
            console.log(`${arr[i].nombre} tiene ${arr[i].edad}`)
        }
    }
}
ropiedad([
    {nombre:"maria",edad:19},
    {nombre:"jose",edad:13},
    {nombre:"alejadnro",edad:29},
    {nombre:"hector",edad:16},
    {nombre:"luis",edad:15},
       
])

// Escribir un bucle for que itere sobre un array de objetos y sume los valores de una propiedad específica.
function sumarObj(obj){
    let total = 0;
    for(let i = 0; i < obj.length; i++){
        if("precio" in obj[i]){
            total+=obj[i].precio
        }
    }
    return console.log(`el total de su compra es ${total}$ sin iva`)
}
sumarObj([
    {nombre:"tomate",precio:3},
    {nombre:"casabe",precio:2},
    {nombre:"mortadela",precio:4},
    {nombre:"pan",precio:1},
    {nombre:"harina",precio:3},
       
])


// Escribir un bucle for que itere sobre un array de objetos y calcule el promedio de los valores de una propiedad específica.
function promedioInObject(obj){
    let sum = 0;
    let result = 0;
    for(let i = 0; i < obj.length; i++){
        if("precio" in obj[i]){
            sum+=obj[i].precio
        }
    }
    result = sum / obj.length
    return console.log(result)
}
promedioInObject([
    {nombre:"tomate",precio:33},
    {nombre:"casabe",precio:23},
    {nombre:"mortadela",precio:20},
    {nombre:"pan",precio:13},
    {nombre:"harina",precio:33},
])
// Escribir un bucle for que itere sobre un array de números y muestre solo los números que son divisibles por 3.
function iterarPOrdivisibles3(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 === 0){
            console.log(arr[i])
        }
    }
}
iterarPOrdivisibles3([1,2,3,4,5,6,7,8,9,10,11,12,12,13,20,12,220,223,35,46,12,4,6,7,1,12,21])

// Escribir un bucle for que itere sobre un array de números y muestre solo los números que son divisibles por 5.
function arrDivisible(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 5 === 0){
            console.log(`los numeros divisibles por 5 son:${arr[i]}`)
        }
    }
}
arrDivisible([2,4,11,23,35,5465,24,435,123,325,123,324])

// Escribir un bucle for que itere sobre un array de números y muestre solo los números que son divisibles por 3 y 5.
function arrDivisible3(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 5 === 0 ){
            console.log(`los numeros divisibles por 5 son:${arr[i]}`)
        }else if(arr[i] % 3 === 0){
            console.log(`los numeros divisibles por 3 son:${arr[i]}`)
        }
    }
}

arrDivisible3([1,2,3,4,5,6,7,8,12,23,5,5,67,34,33,53,64,35,76,563,4,4534,32,43])


// Escribir un bucle for que itere sobre un array de números y muestre el número más grande.
function arrMayor(arr){
    let numeromasgrande = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > numeromasgrande){
            numeromasgrande = arr[i]
        }
    }
    return console.log(`el numero mas grande es: ${numeromasgrande}`)
}
arrMayor([1,2,100,12,23,43,35])

// Escribir un bucle for que itere sobre un array de números y muestre el número más pequeño.
function arrmenor(arr){
    let numeromasgrande = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < numeromasgrande){
            numeromasgrande = arr[i]
        }
    }
    return console.log(`el numero mas menor es: ${numeromasgrande}`)
}
arrmenor([1,2,2,0,23,231,213])

// Escribir un bucle for que itere sobre un array de números y muestre el segundo número más grande.

function domayor(arr){
    let first = arr[0]
    let second = arr[0]
    let thre = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > first){
            thre = second
            second = first
            first = arr[i]
        }
    }
    return console.log(`el segundo numero mayor es ${second} y el primero es ${first} el tercero es: ${thre}`)
}
domayor([1,2,3,4,5,77,88,22,100])

// Escribir un bucle for que itere sobre un array de números y muestre el segundo número más pequeño.
function segundonumero(arr){
    let first = arr[0]
    let second = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < first){
            second = first
            first = arr[i]
        }
    }
    return console.log(`el primer numero menor es : ${first} y el segundo es :${second}`)
}
segundonumero([10,6,20,30,50,4,34,34,45])

// Escribir un bucle for que itere sobre un array de números y muestre el número que aparece con más frecuencia.

function numeroMasFrecuente(arr) {
    let obj = {}
    let frecuencia = 0
    let nummas;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(num in obj){
            obj[num]++
        }else{
            obj[num] = 1
        }
    }
    for(let num in obj){
        if(obj[num] > frecuencia){
            frecuencia = obj[num]
            nummas = num
        }
    }
    return console.log(nummas) 
  }
numeroMasFrecuente([12,2,3,4,5,12,12,6,7,10,12,12,12,11,1,11,11,11,23,221,21,66])

// Escribir un bucle for que itere sobre un array de números y muestre el número que aparece con menos frecuencia.
function menosFrecuencia(arr){
    let obj = {}
    let min = arr[0]
    let numms;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(num in obj){
            obj[num]++
        }else{
            obj[num] = 1
        }
    }

    for(let num in obj){
        if(obj[num] < min){
            min = obj[num]
            numms = num
        }
    }

    return console.log(`el que menos se repite es ${numms}`)
}
menosFrecuencia([11,11,11,3,3,1,23,1])
// Escribir un bucle for que itere sobre un array de números y muestre solo los números únicos.
function mostrarNUmerosUnciso(arr){
    let arrs = []
    for(let i = 0; i < arr.length; i++){
        let numero = arr[i]
        let verdad = false
        for(let j = 0; j < arr.length; j++){
            if(i != j && numero === arr[j]){
                verdad = true
                break
            }
        }
        if(!verdad){
            arrs.push(numero)
        }
    }
    console.log(arrs)
}
mostrarNUmerosUnciso([1,2,3,6,5,5,7,8,8,12,23,12,23,24])
// Escribir un bucle for que itere sobre dos arrays y muestre solo los elementos que aparecen en ambos arrays.
 function ambosArray(arr1,arr2){
    let arr = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                if(arr.indexOf(arr1[i]) === -1){
                    arr.push(arr1[i])
                }
            }
        }
    }
    return console.log(arr)
 }
ambosArray([1,2,3,4,5,6,7,8,9,10],[10,11,1,2,12,15,20,25,26,40,7])



// Escribir un bucle for que itere sobre un array de números y elimine los números duplicados.
function duplicados(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }
    return console.log(newArr)
}
duplicados([1,1,2,2,3,3,4,4,5,6,7,9,9])

// 28. Escribir un bucle for que itere sobre un array de strings y elimine los espacios en blanco al principio y al final de cada string.
function eliminarEspacios(strings){
    let newArr = []
    for(let i = 0; i < strings.length; i++){
        let string = strings[i].trim()
        newArr.push(string)
    }
    return console.log(newArr)
}
eliminarEspacios(["  hola  "," soy ","  juan  ","  manuel  "])

// Escribir un bucle for que itere sobre un objeto y muestre solo las claves del objeto.

function clavesdeunobjeto(obj){
    for(let clave in obj){
        console.log(clave)
    }
}
clavesdeunobjeto({
    nombre:"Juan",
    edad:13,
    trabajo:"desarrollador jr"
})

// Escribir un bucle for que itere sobre un objeto y muestre solo los valores del objeto.

function iterarvalores(obj){
    for(let clave in obj){
        console.log(obj[clave])
    }
}
iterarvalores({
    nombre:"Juan",
    edad:13,
    trabajo:"desarrollador jr"
})

// Escribir un bucle for que itere sobre un objeto y elimine una propiedad específica del objeto.
function borrar(obj,propiedad){
    for(let clave in obj){
        if(clave === propiedad){
           console.log(delete obj[propiedad])
        }
    }
}
borrar({
    nombre:"Juan",
    edad:13,
    trabajo:"desarrollador jr"
},"trabajo")

// Escribir un bucle for que itere sobre un objeto y calcule el número de propiedades del objeto.
function objcount(obj){
    let contador = 0
    for(let clave in obj){
        contador++
    }
    return console.log(contador)
}
objcount({
    nombre:"Juan",
    edad:13,
    trabajo:"desarrollador jr"
})

// Escribir un bucle for que itere sobre un objeto y muestre solo las propiedades que tienen valores de tipo string.
function iterarPrpiedades(obj){
    for(let clave in obj){
        if(typeof obj[clave] === "string"){
            console.log(obj[clave])
        }
    }
}
iterarPrpiedades({
    nombre:"juan",
    apeliddo:"garcia",
    edad:19,
    perro:"pastor aleman"
})

// Escribir un bucle for que itere sobre un objeto y muestre solo las propiedades que tienen valores de tipo number.
function iterarPrpiedadesN(obj){
    for(let clave in obj){
        if(typeof obj[clave] === "number"){
            console.log(obj[clave])
        }
    }
}
iterarPrpiedadesN({
    nombre:"juan",
    apeliddo:"garcia",
    edad:19,
    perro:"pastor aleman"
})


// Escribir un bucle for que itere sobre un objeto y muestre solo las propiedades que tienen valores de tipo boolean.
function iterarPrpiedadesB(obj){
    for(let clave in obj){
        if(typeof obj[clave] === "boolean"){
            console.log(obj[clave])
        }
    }
}
iterarPrpiedadesB({
    nombre:"juan",
    apeliddo:"garcia",
    edad:19,
    perro:"pastor aleman",
    verdadero:true
})



// Escribir un bucle for que itere sobre un objeto y muestre solo las propiedades que tienen valores de tipo objeto.
function mostrarPropiedadesDeObjetos(objeto) {
    for (let prop in objeto) {
      if (typeof objeto[prop] === 'object' && objeto.hasOwnProperty(prop)) {
        console.log(prop + ': ' + objeto[prop]);
      }
    }
  }
  
  // Ejemplo de uso
  const miObjeto = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Av. Principal',
      ciudad: 'Lima',
      pais: 'Perú'
    },
    telefono: {
      fijo: '1234567',
      celular: '987654321'
    }
  };
  
  mostrarPropiedadesDeObjetos(miObjeto);


// Escribir un bucle for que itere sobre un objeto y muestre solo las propiedades que tienen valores de tipo array.
function mostrartipoarr(arr){
    for(let obj in arr){
        if(Array.isArray(arr[obj])){
            console.log(`${obj}:${arr[obj]}`)
        }
    }
}
mostrartipoarr({
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Av. Principal',
      ciudad: 'Lima',
      pais: 'Perú'
    },
    telefono: {
      fijo: '1234567',
      celular: '987654321'
    },lol: [
        1,
        2,
        3,
        4,
    ]
  })

// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores de tipo string.
function arrstring(arrayDeObjetos){ 
for(let i = 0; i < arrayDeObjetos.length; i++){
    for(let prop in arrayDeObjetos[i]){
        if(typeof arrayDeObjetos[i][prop] === "string" && arrayDeObjetos[i].hasOwnProperty(prop)){
            console.log(`${prop}:${arrayDeObjetos[i][prop]}`)
        }
    }
}
}
arrstring([
    { nombre: 'Juan', edad: 30, direccion: 'Av. Principal' },
    { nombre: 'María', edad: 25, direccion: 'Calle Secundaria' },
    { nombre: 'Pedro', edad: 40, direccion: 'Plaza Mayor' }
  ])
  

// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores de tipo number.

function mostrarSolotipoNumber(obj){
    for(let i = 0; i < obj.length; i++){
        for(let prop in obj[i]){
            if(typeof obj[i][prop] === "number" && obj[i].hasOwnProperty(prop)){
                console.log(`${prop}:${obj[i][prop]}`)
            }
        }
    }
}
mostrarSolotipoNumber([
    { nombre: 'Juan', edad: 30, direccion: 'Av. Principal' },
    { nombre: 'María', edad: 25, direccion: 'Calle Secundaria' },
    { nombre: 'Pedro', edad: 40, direccion: 'Plaza Mayor' }
  ])
  

// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores de tipo boolean.
function boleanobj(obj){
    for(let i = 0; i < obj.length; i++){
        for(let prop in obj[i]){
            if(typeof obj[i][prop] === "boolean" && obj[i].hasOwnProperty(prop)){
                console.log(`${prop}:${obj[i][prop]}`)
            }
        }
    }
}
boleanobj([
    { nombre: 'Juan', edad: 30, direccion: true },
    { nombre: 'María', edad: 25, direccio:false},
    { nombre: 'Pedro', edad: 40, direccion: true }
  ])
  

// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores de tipo objeto.
function arrayDeObjetos(array){
    for(let i = 0; i < array.length; i++){
        for(let prop in array[i]){
            if(typeof array[i][prop] === "object" && !Array.isArray(array[i][prop])){
                console.log(`${prop}: ${ JSON.stringify(array[i][prop])}`)
            }
        }
    }
}
arrayDeObjetos([
    { nombre: 'Juan', edad: 30, direccion: { calle: 'Av. Principal', numero: 123 } },
    { nombre: 'María', edad: 25, direccion: { calle: 'Calle Secundaria', numero: 456 } },
    { nombre: 'Pedro', edad: 40, direccion: { calle: 'Plaza Mayor', numero: 789 } }
  ])
  
// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores de tipo array.
function arrayOj(obj){
    for(let i = 0; i < obj.length; i++){
        for(let prop in obj[i]){
            if(Array.isArray(obj[i][prop])){
                console.log(`${prop}:${JSON.stringify(obj[i][prop])}`)
            }
        }
    }
}
arrayOj([
    { nombre: 'Juan', edad: 30, pasatiempos: ['fútbol', 'cine'] },
    { nombre: 'María', edad: 25, pasatiempos: ['leer', 'viajar'] },
    { nombre: 'Pedro', edad: 40, pasatiempos: ['música', 'cocina'] }
  ])
// Escribir un bucle for que itere sobre un array de números y elimine los números impares.
function eliminarImpares(array = []){
    let newarr = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            newarr.push(array[i])
        }
    }
    console.log(newarr)
}
eliminarImpares([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20])

// Escribir un bucle for que itere sobre un array de números y elimine los números pares.

function arrpares(arr){
    let newArr = arr.filter(numero => numero % 2 !== 0)
    console.log(newArr)
}
arrpares([1,2,3,4,5,6,7,8,9,10,11,12,14,15,13,16])


// Escribir un bucle for que itere sobre un array de números y elimine los números que son múltiplos de 3.
function multiplosde3(arr){
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 === 0){
            continue;
        }
        newarr.push(arr[i])
    }
    console.log(newarr)
}
multiplosde3([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])

// Escribir un bucle for que itere sobre un array de números y elimine los números que son múltiplos de 5.

function multiplos5(arr){
    let newarr = arr.filter(numero => numero % 5 !== 0)
    console.log(newarr)
}

multiplos5([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])
// Escribir un bucle for que itere sobre un array de números y elimine los números que son múltiplos de 3 y 5.

function multiplos5and3(arr){
    let newarr = arr.filter(numero => numero % 5 !== 0 && numero % 3 !== 0)
    console.log(newarr)
}

multiplos5and3([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])


// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que cumple una condición específica.

function createarr(arr){
    let newArray = [];
    let rexp = /^[tT]or/i
    for(let i = 0; i < arr.length; i++){
        if(rexp.test(arr[i])){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray)
}
createarr(["jose","torffin","torkel","pedo","maria","TORS","torguel"]);
// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que no cumple una condición específica.
function noeresmayor(arr){
    let mayores = []
    let menores = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 18){
            menores.push(arr[i])
        }else{
            mayores.push(arr[i])
        }
    }
    console.log(`la mayoria de estudiantes menores de edad tienen: ${menores}, y los mayores tienen ${mayores}`)
}
noeresmayor([1,20,12,20,24,35,31,21,15,16,17,18,19,20,21])

// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que contiene una cadena específica.
function arrayobj(arr){
    for(let i = 0; i < arr.length; i++){
        for(let obj in arr[i]){
            if(arr[i][obj] === "pobre"){
                console.log(`aca una lista ${obj} con estudiantes que son pobres ${arr[i][obj]}`)
            }else if(arr[i][obj] === "rico"){
                console.log(`aca una lista de estudaintes ricos: ${arr[i][obj]}`)
            }
        }
    }
}
arrayobj([
    {nombre:"pablo",clasesocial:"pobre"},
    {nombre:"cusko",clasesocial:"rico"},
    {nombre:"rodolfo",clasesocial:"pobre"},
    {nombre:"rofin",clasesocial:"pobre"},
    {nombre:"miguel",clasesocial:"rico"},
    {nombre:"manuel",clasesocial:"pobre"},
    {nombre:"jose",clasesocial:"rico"},
    {nombre:"sogia",clasesocial:"rico"}
])

// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que no contiene una cadena específica.



// 53. Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad con un valor menor que un valor específico.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad con un valor igual a un valor específico.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad con un valor dentro de un rango específico.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que cumple una condición específica y otra propiedad que cumple otra condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que cumple una condición específica o otra propiedad que cumple otra condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que cumple una condición específica y una propiedad que no cumple otra condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen una propiedad que cumple una condición específica o una propiedad que no cumple otra condición específica.



// Escribir un bucle for que itere sobre un array de objetos y calcule la suma de los valores de una propiedad específica de los objetos.



// Escribir un bucle for que itere sobre un array de objetos y calcule la media de los valores de una propiedad específica de los objetos.



// Escribir un bucle for que itere sobre un array de objetos y encuentre el objeto con el valor máximo de una propiedad específica.



// Escribir un bucle for que itere sobre un array de objetos y encuentre el objeto con el valor mínimo de una propiedad específica.



// Escribir un bucle for que itere sobre un array de objetos y encuentre todos los objetos con el valor máximo de una propiedad específica.



// Escribir un bucle for que itere sobre un array de objetos y encuentre todos los objetos con el valor mínimo de una propiedad específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores únicos en todos los objetos.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores repetidos en al menos un objeto.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores nulos o indefinidos en al menos un objeto.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo las propiedades que tienen valores no nulos y definidos en todos los objetos.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades de otro objeto específico.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad de otro objeto específico.



// 73. Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas con valores no nulos y definidos.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida con valor nulo o indefinido.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas con valores únicos en todos los objetos.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida con valores repetidos en al menos un objeto.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas con valores dentro de un rango específico.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida con valor fuera de un rango específico.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que cumplen una condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que cumple una condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que no cumplen una condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que no cumple una condición específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que contienen una subcadena específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que contiene una subcadena específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que no contienen una subcadena específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que no contiene una subcadena específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que empiezan con una letra o subcadena específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que no empieza con una letra o subcadena específica.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que terminan con



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que contienen solo números.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que contiene caracteres no numéricos.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que son valores booleanos.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que no es un valor booleano.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que son de tipo función.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que no es de tipo función.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que son objetos anidados.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen al menos una propiedad requerida que no es un objeto anidado.



// Escribir un bucle for que itere sobre un array de objetos y muestre solo los objetos que tienen todas las propiedades requeridas que son valores únicos en cada objeto y que no se repiten en otros objetos del array.