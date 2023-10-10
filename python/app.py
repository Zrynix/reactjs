#dit is een test
a = "Hello"
b = "World"
c = a + " " + b
print(c)

if 5 > 2:
    print("kapsalon van pasha is beste kapsalon")
    
    a = ('hamid')
    A = ('van-de-bergen')
    print(a,A)
    
    q, w, e = "Pasha ", "Mustache ", "HAS "
    
    print(q + w + e)
    
    fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)

x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)

x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))

import random

print(random.randrange(1, 10))

a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a)

txt = "The best things in life are free!"
print("free" in txt)

txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")
  
  txt = "The best things in life are free!"
print("expensive" in txt)

txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")
  