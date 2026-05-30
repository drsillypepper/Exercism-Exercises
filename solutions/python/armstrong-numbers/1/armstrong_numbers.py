def is_armstrong_number(number):
    power = len(list(str(number)))
    number_sum = sum([int(num) ** power for num in list(str(number))])
    return number == number_sum