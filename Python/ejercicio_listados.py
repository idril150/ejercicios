
amigos = ["juan", "Pedro", "Luis"]
print(type(amigos))
print(amigos)

# que pasa si queremos agregar mas datos a la lista??
amigos.append("maria")
print(amigos) 

# y si quiero acceder a un solo elemento?
# primer_amigo = amigos[0]
# print(primer_amigo)
print(amigos[3])

#y si no se el atamño del array al que quiero acceder a un dato?
print("cantidad de amigos:", len(amigos))
print(amigos[len(amigos)-2]) 

print("-----------------------OTRO TIPO DE LISTADO --------------------")
mejores_amigos={
    "universidad" : "juan",
    "barrio" : "lucas",
    "trabajo" : "javier"
}
print(type(mejores_amigos))
print(mejores_amigos)
print(mejores_amigos["trabajo"])

print("------------------------ MAS LISTADOS DE TUPLAS PYTHON  ---------------------------")
mejores_amigas = ("ana", "Maria", "Juana")
print(mejores_amigas)
#Las tuplas son como un listado de constantes pupesto que no se les puede agregar, eliminar ni modificar los datos

