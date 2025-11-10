#Importacion de coloram para los colores...
import colorama
#Se importa Fore y su as para poder mostrar los colores y el as para re nombrar el Fore
from colorama import Fore as fr

inventario = {} #Inventario para nombre, precio cantidad y su costo total atra ves de la lista creada
#Se crea la variable de la lista colores para almacenar los colores registrados
colores = {#Inventario para la importacion de colores para luego llamarlo utilizando el simbolo (f) dentro de un print con su nombre del diccionario
    "verde": fr.GREEN,# ose seria print(f"{'verde'}")
    "rojo": fr.RED,
    "azul": fr.CYAN,#En el inventario se le llama fr, por el as de la importacion.. y sus colores en ingles 
    "amarillo": fr.YELLOW
}
#Dando la bienvenida al usuario a la plicacion..
print(f"{colores['verde']}\n****************************************************")
print("Bienvenido al registro de inventario")
print("**************************************************** \n")

cierre = f"{colores['azul']}Cerraste la sesión exitosamente...\n"#Variable del cierre exitoso... con su color azul y un salto de linia que es con: \n

while True: #Se crea el bucle while, para poder hacer la accion de repetir por si el usuario quiere repetir el inventario o ya finalizado
    print(f"{colores['amarillo']}Hola, bienvenido.\n ¿Qué quieres hacer?") #Dando le la pregunta al usuario que quieres hacer??
    print(f"{colores['azul']}1. Ingresar información \n2. Salir del menú")#Le doy al usuario la opcion de elegir si 1 o 2 

    try:#Esto lo que hace es que intentara detectar un erro en la informacion dada en su continuacion y asi poderlo mandarlo al except y muestre el error
        # Y lo repita
        respuesta_Opciones = int(input(f"{colores['amarillo']}Cuál es tu opción? ")) #variable de tipo int para que la accion copiada sea un entero
        if (respuesta_Opciones not in [1, 2]):#Condicional para que si la opcion digitada de la varible creada no es 1 o 2 mostrar el mensaje seleccionado
            print(f"{colores['rojo']}\nSolo se permiten los números 1 o 2\nIntentémoslo otra vez...\n")#Creacion de informacion al usuario de su error
            continue# Se crea un continuo para saltar la interaccion siguiente de un bucle
    except ValueError:# Se crea para porer mostrar el erro por si hay un error de letra
        print(f"{colores['rojo']}\nPor favor, ingresa un número válido del 1 al 2.\n")#Informacion al usiario visible todas sus infomaciones con su color rojo
        continue#Se crea para continuar y siga con su siguiente funcion o condicion dada

    if (respuesta_Opciones == 2):# Se crea un condicional if para que si la opcion dada de tipo int o entero es dos se cumpla lo siguiente
        print(cierre)# Se crea para mostrar al usuario su cierre de sesion con su variable creada arriba
        break#Se utiliza el breack para poder romper el bucle y cerrar el programa o aplicacion

    while (respuesta_Opciones == 1): #Se crea su bucle  por si la respuesta dada en el entero es 1
        nombre = input(f"{colores['amarillo']}\n¿Cuál es el nombre de tu producto? ") #Se crea la variable para guardar el nombre del usuario

        while True: #Se crea el bucle para sus siguientes preguntas y se repitan a la desicion del usuario
            try:#Se crea porque comidije antes puede haber un error
                precio = float(input(f"{colores['amarillo']}¿Cuál es su precio? "))#Se crea la variable para preguntar su precio y su cierre con el breack
                break
            except ValueError:
                print(f"{colores['rojo']}Solo números por favor, intenta de nuevo.") #Por si hay error en el try se muestra lo siguiente al usuario

        while True: #Se crea su bucle para sus siguientes preguntas y se repita segun el usuario quiera
            try:#Por si en la pregunta hay un error se muestra
                cantidad = int(input(f"{colores['amarillo']}¿Cuántos {nombre} son? "))
                if (cantidad <= 0):#Tiene su condiconal en el if  por si es menor igual a 0 diga que tiene que se un numero positivo y no negativo
                    print(f"{colores['rojo']}Debe ser un número positivo, intenta de nuevo.") 
                    continue#Con su continuacion del codigo por si no hay error
                break #para que rompa la condicion y muestre el error de except y si repita
            except ValueError:
                print(f"{colores['rojo']}Solo números por favor, intenta de nuevo.")

        inventario[nombre] = {#Se utiliza la variable creada inventario para crear un diccionario que muestre su precio, cantidad y costo total
            "precio": precio,
            "cantidad": cantidad,
            "costo_total": precio * cantidad
        }

        # Le da la informacion al usuario que se guardo sus datos perfecta mente
        print(f"{colores['azul']}\nPerfecto........")
        print(f"{colores['verde']}*" * 45)
        print(f"{colores['verde']}Tus datos han sido guardados exitosamente.")
        print(f"{colores['verde']}*" * 45)

        while True: #Se crea el bucle por si la accion del usuario no se encuentra en la pregunta que se le da al usuario
            try:#si hay error en el try brnca al execpt muestra la informacion en el y se repite...
                cierre_api = int(input(
                    f"{colores['amarillo']}Elige una opción:"
                    f"{colores['azul']}\n 1. Añadir más productos\n 2. Ver/Editar inventario\n 3. Salir\n"
                    f"{colores['amarillo']}Tu respuesta: "
                )) # Se le pregunta al usuario en un tipo entero.. para poder seguir con la informacion

                if (cierre_api == 1):# Su condicional por si la eleccion de la variable entero es igual 1 mostra la siguiente informacion con su color
                    print(f"{colores['verde']}\n****************************************************")
                    print(f"{colores['amarillo']}Agrega otro producto:")
                    print(f"{colores['verde']}****************************************************\n")
                    break #Es para que rompa y pueda seguir con la siguente condicion por si no es 1

                elif (cierre_api == 2): #Se utilixa para que la variable que se pregunto es igual a 2 y muestre su informacion y sus colores
                    print(f"{colores['amarillo']}\nINVENTARIO:")
                    for (producto, datos) in inventario.items():#Se crea el for con 2 variables nuevas y se llama el inventario con su itmes.
                        #El itmes se utiliza para que la informacion guardada en el diccionario para que cuando se llamen se muestre
                        print(f"{colores['verde']}*" * 45)
                        #se utilizan sus colores importados sus separados con \n y su forma de llamarlo que seria: si producto es igual
                        # a sus dos puntos es para que muestre el nombre guardado en el dicionario y con los demas es que la variable creada datos contegna la
                        #Informacion de el diccionario con su palabra llamada en el como se aprecia a continuacion..
                        print(f"{colores['azul']}- {producto}: {datos['cantidad']} unidades a ${datos['precio']}  (Total: ${datos['costo_total']})")
                        print(f"{colores['verde']}*" * 45) #Se llama los colores y se multiplica por el estring  y su informacion por 45 para que muestre
                        #Varias veces su accion escrita

                    #Se utiliza el bucle para que cuando el usuairo dijite la opcion de modifca pueda repetirse si el usuario quiere
                    while True:
                        try:#Se utiliza por si la variable creada dentro de se muestra con un error y se repita como he explicado anterior mente
                            #Se crea su variable editar para que ellos escojan si: si o no
                            editar = int(input(f"\n{colores['amarillo']}¿Deseas modificar algún producto?\n{colores['azul']} 1. Sí \n 2. No \n{colores['amarillo']}Tu respuesta es: "))

                            if (editar == 1): #Se crea su condicional para que la opcion de la variable entero es 1 muestre lo siguiente
                                #Se creo la variable prod para seguir preguntado la modificacion de si el usuario le da en seguir
                                prod = input(f"{colores['amarillo']}Ingresa el nombre del producto a modificar: ")
                                #Se agrego el condicional con el in para que si el elemento existe se compla la condicion
                                if (prod in inventario):
                                    #Se pregunta al usuario que quiere modificar y su respuesta dada con su variable entera para que se ejecute y se guarde su opcion
                                    print(f"{colores['amarillo']}\n Que deseas modificar? ")
                                    print(f"{colores['azul']}1. Nombre\n2. Precio\n3. Cantidad\n4. Cancelar")
                                    opcion_edit = int(input(f"{colores['amarillo']}Tu opción: ")) #Se crea la variable ya dichaa

                                    if (opcion_edit == 1):#Se crea su condicional por si la opcion entera es igual igual a 1 muestre la informacion dentreo de ese condicional

                                        nuevo_nombre = input(f"{colores['amarillo']}Nuevo nombre: ") # Se crea su variable string para que digite el nombre a cambiar
                                        inventario[nuevo_nombre] = inventario.pop(prod)#Se llama la variable inventario que tiene como accion su diccionario
                                        #para que cree un nuevo nombre el cual es igual al mismo invetario con su diccionario guardado.
                                        #El .pop lo que hace es que cambia el nombre ingresado por el que esta dentro de el, por eso la variable prod
                                        #la que es la que pregunta se cambia
                                        print(f"{colores['verde']}Nombre actualizado correctamente.")#Se le muestra al usuario que su nombre fue cambiado exitosa mente
                                    elif (opcion_edit == 2):#Se crea su condicional elif para continuar por si envez de la opcion 1 escoge la opcion 2
                                        #Se utiliza su condicional el cual tiene como float para que el pueda tener decimales el precio
                                        nuevo_precio = float(input(f"{colores['amarillo']}Nuevo precio: "))
                                        inventario[prod]["precio"] = nuevo_precio#Se llama al inventario y dentro se llama la variable del nombre del producto que se va a modifcar
                                        #y que nuevo precio se cambie por el diligenciado
                                        inventario[prod]["costo_total"] = nuevo_precio * inventario[prod]["cantidad"]
                                        print(f"{colores['verde']}Precio actualizado correctamente.") #mensaje al usuario para que sepa que sus datos se guardaron exitosa mente
                                    elif (opcion_edit == 3):#Se crea su condicional elif para continuar por si envez de la opcion 1 escoge la opcion 2 o opcion 3
                                        #Se crea su variable para que cuando se le agrege su nueva cantidad se pueda guardar y almacenar en el diccionario que su variable es inventario
                                        nueva_cantidad = int(input(f"{colores['amarillo']}Nueva cantidad: "))#Creacion de variable tipo entero o int
                                        inventario[prod]["cantidad"] = nueva_cantidad#Se guarda la informacion de la cantidad puesta en la variable creada y se pasa al diccionario y se muestra
                                        inventario[prod]["costo_total"] = nueva_cantidad * inventario[prod]["precio"]#Lo que hace es que con su nueva cantidad guardad se actualice el precio y se muestre
                                        print(f"{colores['verde']}Cantidad actualizada correctamente.")#Informacion guardad exitosa mente
                                    elif (opcion_edit == 4):#Condicional por si la opcion es 4
                                        print(f"{colores['rojo']}Edición cancelada.")#Mostrar al usuario que su edicion fue cancelada 
                                    else:#por si no cumple ninguna de las condiciones que muestre esto

                                        print(f"{colores['rojo']}Opción no válida.")##Su mensaje por si la opcion no es valida
                                else:
                                    print(f"{colores['rojo']}El producto no existe en el inventario.")
                            #Por si la variable editar es total mente diferente a 1 el seleccion la opcion 2 de salir
                            elif (editar == 2):
                                print(f"{colores['azul']}Saliendo de la edición del inventario...")#Su mensaje de salir 
                                break #Para romper o salir del bucle del while
                            else:
                                print(f"{colores['rojo']}Solo puedes ingresar 1 o 2. Intenta otra vez.")#Por si ninguna de las funcioes esta escria se muestre esto
                        except ValueError:#Por si salta el error o quiera seguir editando puedeas seguir editando con su informacion al usuario
                            print(f"{colores['rojo']}Ingresa un número válido 1 o 2 gracias....")
                    continue #Un continuo por si le da en no seguir editando se salga del bucle y pueda seguir

                elif (cierre_api == 3):#Su condicion para que cunando le de en la opcion  3 de salir pueda salir del todo del programa
                    print("\n" + cierre)
                    exit()#Sive para salir de un bucle o dar por terminado 

                else:#Por si ninguna de las condiciones se cumple que muestre este error y se repita desde su bucle inical con string y se repita
                    print(f"{colores['rojo']}Opción no válida. Ingresa: 1, 2 o 3.")

            except ValueError:#Por si ingresa un numero no valido y haga que se repita el programa
                print(f"{colores['rojo']}Por favor, ingresa un número válido del 1 al 3.\n")