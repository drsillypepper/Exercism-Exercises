def square(number):
    if number < 1 or number > 64:
        raise ValueError("square must be between 1 and 64")
    return 2**(number-1)


def total():
    total_sum = 0
    for i in range(1, 64+1):
        total_sum += square(i)
    return total_sum
