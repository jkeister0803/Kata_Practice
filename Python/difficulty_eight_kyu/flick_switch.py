'''
Task:
Create a function that always returns True for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples:
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes:
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
'''


# My solution:
def flick_switch(lst):
    result = []
    boolean = True
    for item in lst:
        if item != 'flick':
            result.append(boolean)
        else:
            boolean = not boolean
            result.append(boolean)
    return result


# Alternative solution (optimized):
def flick_switch_two(lst):
    res, state = [], True
    for i in lst:
        if i == 'flick':
            state = not state
        res.append(state)
    return res


# Test:
print(flick_switch(['codewars', 'flick', 'code', 'wars']))
print(flick_switch(['flick', 'chocolate', 'adventure', 'sunshine']))
print(flick_switch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))