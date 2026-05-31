#include "resistor_color.h"

int color_code(resistor_band_t resistor){
    return (int)resistor;
}

resistor_band_t *colors(void){
    static resistor_band_t resistorColors[] = {
        BLACK,
        BROWN,
        RED,
        ORANGE,
        YELLOW,
        GREEN,
        BLUE,
        VIOLET,
        GREY,
        WHITE
    };
    return resistorColors;
}