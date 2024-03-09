function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _a = 2; _a < arguments.length; _a++) {
        extras[_a - 2] = arguments[_a];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };
    for (var _b = 0, extras_1 = extras; _b < extras_1.length; _b++) {
        var _c = extras_1[_b], key = _c[0], value = _c[1];
        car.extras[key] = value;
    }
    return car;
}
// Call the function with required information and additional key-value pairs
var carInfo = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);
console.log(carInfo);
