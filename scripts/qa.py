nota1 = float(input('Primeira nota: '))
nota2 = float(input('Segunda nota: '))
nota3 = float(input('Terceira nota: '))
ME = 10

MA = ((nota1 + (nota2 * 2) + (nota3 * 3) + ME) / 7)

print('Média: ', MA)

if(MA >= 9.0):
    print('A')
elif((MA >= 7.5) and (MA < 9.0)):
    print('B')    
elif((MA >= 6.0) and (MA < 7.5)):
    print('C')
elif((MA >= 4.0) and (MA < 6.0)):
    print('D')
else:
    print('E')