def equilateral(sides):
    if not checkTriangleValidity(sides):
        return False
    return sides[0] == sides[1] == sides[2]


def isosceles(sides):
    if not checkTriangleValidity(sides):
        return False
    iso1 = sides[0] == sides[1]
    iso2 = sides[1] == sides[2]
    iso3 = sides[0] == sides[2]
    return iso1 or iso2 or iso3


def scalene(sides):
    if not checkTriangleValidity(sides):
        return False
    scal1 = sides[0] != sides[1]
    scal2 = sides[1] != sides[2]
    scal3 = sides[0] != sides[2] 
    return scal1 and scal2 and scal3


def checkTriangleValidity(sides):
    if not(sides[0] > 0 and sides[1] > 0 and sides[2] > 0):
        return False
    
    a = sides[0]
    b = sides[1]
    c = sides[2]

    if not (a + b >= c and b + c >= a and a + c >= b):
        return False
    return True