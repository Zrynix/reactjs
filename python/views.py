age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))

quantity = 3
itemno = 66
price = 54.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))

txt = "We are the so-called \"Vikings\" from the north."

a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")