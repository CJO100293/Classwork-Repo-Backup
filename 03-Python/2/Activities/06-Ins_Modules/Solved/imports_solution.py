# Import the random and string Module
import random
import string

# Utilize the string module's custom method: ".ascii_letters"
#print(string.ascii_letters)

test = "hello world"
print(test)
print("-----")
print(string.capwords(test))


# Utilize the random module's custom method randint
for x in range(10):
    print(random.randint(1, 10))
