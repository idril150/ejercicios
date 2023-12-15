def suma(a):
    c=a*2
    return c

def saludar(b):
    print("hola mundo XD la neta no se que poner", suma(b))

saludar(8)


print("----------------------un nume ro es mayor que otro-------------------------")

def mayor(x,y):
    if x>y:
        return x
    return y

a=25
b=32
c=128
d=3

print(mayor(mayor(a,b), mayor(c,d)))