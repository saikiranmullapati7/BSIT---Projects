// 9.	Order Delivery Time Estimator

// Build a function to estimate delivery time based on distance. Add extra delay if weather condition is rainy. Return final delivery time.

// Topics to use: If-else conditions, functions, variables, logical operators.


function estimateDelivery(distanceKm, weather) {
    let baseTime;
    let speedLable;

    if(distanceKm <= 5) {
        baseTime = 20;
        speedLable = "Local Zone";
    }else if(distanceKm <= 20) {
        baseTime = distanceKm * 3;
        speedLable = "City zone";
    }else if(distanceKm <= 100) {
        baseTime = distanceKm * 2;
        speedLable = "Metro zone";
    }else{
        baseTime = distanceKm * 1.5 + 60;
        speedLable = "Long Distance";
    }
    let weatherDelay = 0;
    if (weather === "rainy") {
        weatherDelay = Math.round(baseTime * 0.3);
    }
    const totalTime = Math.round(baseTime) + weatherDelay;

    return {
        distance : distanceKm,
        zone : speedLable,
        baseTime : Math.round(baseTime),
        weatherDelay,
        totalTime,
        weather, 
    };
}

console.log(estimateDelivery(100, "rainy"));