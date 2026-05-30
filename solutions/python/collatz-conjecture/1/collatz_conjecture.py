def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    stepcount = 0
    while(number != 1):
        if number % 2 == 0:
            number /= 2
        else:
            number = number * 3 + 1
        stepcount += 1
    return stepcount

