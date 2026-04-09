function isEnoughCapacity(products, containerSize) {

    const pruductValues = Object.values(products);
    
    let totalPruductValue = 0;
 
    for (const value of pruductValues) {
        totalPruductValue += value;
    }

    if (totalPruductValue <= containerSize) {
        return true;
    }

    else {
        return false;
        }    
}

console.log(isEnoughCapacity ({ apples: 2, grapes: 3, carrots: 1 }, 8));