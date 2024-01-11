# My Solution:
def neutralise(s1, s2):
    result = ""
    for i in range(0, len(s1)):
        if s1[i] == s2[i] and s1[i] == '-':
            result += "-"
        elif s1[i] == s2[i] and s1[i] == '+':
            result += "+"
        else:
            result += "0"
    return result


# Alternative Solution:
def neutralise_two(s1, s2):
    result = ""
    for i in range(len(s1)):
        if s1[i] == s2[i]:
            result += s1[i]
        else:
            result += "0"
    return result


# Tests:
print(neutralise("--++--", "++--++"))
print(neutralise_two("--++--", "++--++"))