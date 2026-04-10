function calcAverageCalories(days) {

    let totalCalories = 0;

    for (const keys of days) {
        totalCalories += keys.calories;       
    }
   
    return days.length === 0 ? 0 : totalCalories/days.length;
}

console.log(calcAverageCalories([]));