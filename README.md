[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/443tM8ZN)
# Sums

The program to compute the sum of a list of numbers in `code.js` is incorrect
(and the tests in `code.test.js` are failing). Correct the code such that it
passes the tests.


RESOURCES USED:  Originally coded the sum of list in python and asked chatgpt to convert to js. Below is python code to compute sum of list without testing

import random

random_integers = [random.randint(1, 10) for _ in range(5)]
print(random_integers)

sum = 0

for num in random_integers:

    sum += num

print(sum)
