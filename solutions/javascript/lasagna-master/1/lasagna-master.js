/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime = undefined){
    if(remainingTime == undefined){
        return "You forgot to set the timer.";
    }
    else if(remainingTime <= 0){
        return "Lasagna is done."
    }else{
        return "Not done, please wait."
    }
}
/**
 * @param {number[]} layers
 * 
 */
export function preparationTime(layers, prepTimePerLayer = 2){
    return layers.length * prepTimePerLayer;
}

/**
 * @param {any} layers
 */
export function quantities(layers){
    const SAUCE_LAYER = 0.2;
    const NOODLE_LAYER = 50;
    let obj = {"noodles": 0, "sauce": 0};
    for(let item of layers){
        if(item == "noodles"){
            obj["noodles"] += NOODLE_LAYER;
        }
        else if(item == "sauce"){
            obj["sauce"] += SAUCE_LAYER;
        }
        
    }
    return obj;
}

/**
 * @param {string | any[]} friendsIngredients
 * @param {any[]} ownIngredients
 */
export function addSecretIngredient(friendsIngredients, ownIngredients){
    ownIngredients.push(friendsIngredients[friendsIngredients.length-1]);
    return;
}

/**
 * @param {{ [x: string]: number; }} recipeFor2
 * @param {number} desirablePortions
 */
export function scaleRecipe(recipeFor2, desirablePortions){
    let scaled = {...recipeFor2};
    for(let key in recipeFor2){
        // @ts-ignore
        scaled[key] = recipeFor2[key]/2*desirablePortions;
    }
    return scaled;
}