//=======INPUTS====================//
//Scope global: todas estas variables están en el ámbito global y son accesibles desde cualquier función
let age= 18 //Number
let location = "general"; //String
let ticket = 2 //Number 

//=====Funciones(Declaraciones)====//
//HOISTING: Pueden llamarse antes de su definicion 
function showWelcome() {
    return 'Bienvenido a ticket master'
}

//HOISTING:Las declaraciones de función se elevan (hoisting) al inicio del archivo, por eso pueden llamarse antes de ser definidas.
function checkAge(age){
    //Scope de función: age (parámetro) y message solo existen dentro de checkAge.
 let message;
 if(age < 18){
    message = 'No puede comprar la boleta';
 }
 else{
    message = 'Puedes comprar la boleta normalmente';
 }

 return message;
 }

//HOISTING:Las declaraciones de función se elevan (hoisting) al inicio del archivo, por eso pueden llamarse antes de ser definidas.
 function purchaseDetail(ticket, location){  //Scope de función: tickect, ubication y totalToPay solo existen en esta función.
    let totalToPay = 0;
// scope de bloque :let i en el for de purchaseDetail .
    for (let i = 1; i<= ticket; i++) {
        if (location === 'general') {
            totalToPay += 450000
        }
        
        if (location === 'preferencial') {
            totalToPay += 700000
        }
    
        if (location === 'vip') {
            totalToPay += 1200000
        }
    }
    return totalToPay;
 }

 //HOISTING:Las declaraciones de función se elevan (hoisting) al inicio del archivo, por eso pueden llamarse antes de ser definidas.
 function locationAccess( location){
// Scope de función: ubication y texto solo existen en esta función.
    let texto;

    switch (location){
        case 'general':
            texto = 'Acceso a gradillas';
        break;
        case 'preferencial':
            texto = 'Incluye silla y mas cerca al escenario';
        break;
        case 'vip':
            texto = ' Interactuar con el artista, circulo privado con sillas y mesas para 6 personas';
        break;
        default:
            texto = 'No acceso';
    }

    return texto;
 }

 //HOISTING:Las declaraciones de función se elevan (hoisting) al inicio del archivo, por eso pueden llamarse antes de ser definidas.
function main() {
//Scope de función: msgage, totalToPay y detail solo existen dentro de main.
    const ageMessage = checkAge(age);
    const totalToPay= locationAccess(location)
    const detail= purchaseDetail(ticket,location)

    console.log(showWelcome());
    console.log( ageMessage);
    console.log( totalToPay);
    console.log(detail)
}

//Variable global (SCOPE GLOBAL):esta variable están en el ámbito global y son accesibles desde cualquier función//
let esDemo = true;
//sirve para comentar sobre scope global//
//ejecutar el programa//
main();