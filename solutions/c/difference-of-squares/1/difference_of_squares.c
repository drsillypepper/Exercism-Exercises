#include "difference_of_squares.h"


unsigned int sum_of_squares(unsigned int number){
    unsigned int squares = 0;
    for(unsigned int i = 1; i <= number; i++){
        squares += i * i;
    }
    return squares;
}
unsigned int square_of_sum(unsigned int number){
    unsigned int number_sum = 0;
    for(unsigned int i = 1; i <= number; i++){
        number_sum += i;
    }
    return number_sum * number_sum;
}
unsigned int difference_of_squares(unsigned int number){
    return square_of_sum(number) - sum_of_squares(number);
}
