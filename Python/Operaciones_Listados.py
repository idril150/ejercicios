alumnos = ["Juan", "Pedro", "Beto"]
sumatoria = 0 
for alumno in alumnos:
    print(alumno)

numbers = [24,35,69,71,574,269,128,1245]

#ciclo for donde se inserta un valor del array numbers en la variable number en cada ciclo
for number in numbers:
    if number%2 ==0 :
        print(number, "es par")
    
    else: print(number, "es in par")
    sumatoria = sumatoria + number

print("la sumatoria es:",sumatoria)