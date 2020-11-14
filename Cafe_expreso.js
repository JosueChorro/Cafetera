//Descripcion del funcionamiento de una 
//cafetera semi-automatioca, con doble caldera y molino incluido


/* @josuechorro, Jc_aries */


//Declaracion de variables
let boton = false; //Boton
let opc = 1; //Opcion de menu main
let opc1 = 1; //Opcion de menu bebida
let opc2 = 2; //Opcion de menu again
let men = 1; //Bucle del menu
let cal1 = 100; //Caldera de agua
let cal2 = 100;
let maneral1 = 100; //Maneral del cafe
let granos = 100; //Deposito de granos
let opcion = 1; //Variable de proceso

//Proceso inicial de la cafetera
try {
    console.log("Desea encender la cafetera");
    boton = true;
    setTimeout(function() {
        menu()
    }, 3000);
    if (boton === true) {
        console.log("Cafetera enciendo....")
    }

} catch (ex) {
    console.log(ex);
}



//Metodo del menu
function menu() {
    console.clear();
    //Bucle del menu
    do {
        console.log("************************");
        console.log("*      Bienvenido      *");
        console.log("************************");
        console.log("************************");
        console.log("*Seleccione una opcion *");
        console.log("* 1) Cafe expreso      *");
        console.log("* 2) Agua Caliente     *");
        console.log("* 3) Apagar            *");
        console.log("************************");
        switch (opc) {
            //Opcion del cafe
            case 1:
                setTimeout(function() {
                    tamano();
                }, 3000);
                men = 4;
                break;
                //Opcion de agua caliente
            case 2:
                setTimeout(function() {
                    tamano();
                }, 3000);
                men = 4;
                break;
                //Opcion apagar la cafetera
            case 3:
                men = 4;
                break;
            default:
                men = men + 1;
                break;
        }
    } while (men < 3);
}


//Funcion principal a ejecutar para el cafe
function expreso() {
    molino()
}

//Funcion del molino de cafe
function molino() {
    if (granos >= 10) {
        console.log("Triturando cafe.....")
        granos = granos - 10;
        maneral();
    } else {
        console.log("No hay suficientemente granos de cafe para elaborarlo");
    }
}

//Funcion que contiene el cafe triturado
function maneral() {
    if (maneral1 >= 50) {
        console.log("Diluyendo el cafe.....")
        llenar();
    } else {
        console.log("Hubo un error con el maneral");
    }
}

//Funcion que vacia la caldera
function Agua(opcion) {
    if (opcion === 1) {
        if (cal1 <= 15 && cal2 <= 15) {
            console.log("Favor llenar las calderas");
        } else {
            setTimeout(function() {
                if (cal1 >= 15) {
                    console.log("vaciando caldera....");
                    cal1 = cal1 - 12;
                    if (opc === 1) {
                        expreso();
                    } else {
                        llenar();
                    }
                } else {
                    console.log("vaciando caldera....");
                    cal1 = cal1 - 8;
                    if (opc === 1) {
                        expreso();
                    } else {

                    }
                }
            }, 1500);
        }
    } else if (opcion === 2) {
        if (cal1 >= 15 && cal2 >= 15) {
            console.log("Favor llenar las calderas");
        } else {}
    }
}

//Funcion del tamaño de la bebida
function tamano() {
    console.clear()
    console.log("************************");
    console.log("* Seleccione el tamaño *");
    console.log("* 1) 8 oz              *");
    console.log("* 2) 12 oz             *");
    console.log("* 3) salir             *");
    console.log("************************");
    switch (opc1) {
        //Opcion del cafe
        case 1:
            opcion = 1;
            setTimeout(function() {
                Agua(opcion);
            }, 3000);
            break;
            //Opcion de agua caliente
        case 2:
            opcion = 2;
            Aguas(opcion);
            break;
            //Opcion apagar la cafetera
        case 3:

            break;
        default:
            break;
    }
}

//Funcion que va rellenando el vaso
function llenar() {
    setTimeout(function() {
        console.log("Llenando vaso....");
    }, 1500);
    setTimeout(function() {
        console.log("Bebida lista, disfrutela :)");
    }, 2500);
    setTimeout(function() {
        again();
    }, 4000);
}

//Funcion que devuelve al menu principal
function again() {
    console.clear();
    console.log("*********************");
    console.log("* Desea otra bebida *");
    console.log("* 1) Si             *");
    console.log("* 2) No             *");
    console.log("*********************");
    switch (opc2) {
        //Opcion del cafe
        case 1:
            setTimeout(function() {
                menu();
                men = 1;
            }, 5000);
            break;
            //Opcion de agua caliente
        case 2:

            break;
        default:

            break;
    }
}