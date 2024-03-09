function createCar(manufacturer: string, modelName: string, ...extras: [string, any][]): { manufacturer: string; modelName: string; extras: { [key: string]: any } } {
    let car: { manufacturer: string; modelName: string; extras: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };

    for (let [key, value] of extras) {
        car.extras[key] = value;
    }

    return car;
}

// Call the function with required information and additional key-value pairs
let carInfo = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);
console.log(carInfo);
