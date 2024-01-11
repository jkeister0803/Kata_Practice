'''
The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.
'''


# My solution:
def hotpo(n):
    iterations = 0
    while n != 1:
        if n % 2 == 0:
            n = n / 2
        else:
            n = 3 * n + 1
        iterations += 1
    return iterations


# Tests:
print(hotpo(1))
print(hotpo(5))
print(hotpo(6))
print(hotpo(23))