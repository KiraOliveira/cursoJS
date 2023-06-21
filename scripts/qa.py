nota1 = float(input('Primeira nota: '))
nota2 = float(input('Segunda nota: '))
nota3 = float(input('Terceira nota: '))
nota4 = float(input('Quarta nota: '))
ME = 10

MA = nota1 + (nota2 * 2) + (nota3 * 3) + ME / 7

print('Média: ', MA)

if(MA <= 7.5 && MA < 9.0)
    print('B')
elif((MA == 6.0) AND (MA < 7.5))
    print('C')
elif((MA == 4.0) AND (MA <6.0))
    print('D')
else:
    print('A')