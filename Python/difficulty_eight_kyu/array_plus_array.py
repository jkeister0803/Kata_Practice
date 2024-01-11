'''
I'm new to coding and now I want to get the sum of two arrays...
Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
'''


# My solution: (concat two lists and wrap in a sum() function)
def array_plus_array(arr1, arr2):
    return sum(arr1 + arr2)


# Test:
print(array_plus_array([1, 2, 3], [4, 5, 6]))