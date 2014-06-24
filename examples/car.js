var Car = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
Car.prototype.description = function () {
    return this.make + " " + this.model + " (" + this.year + ")";
};
var car = new Car("Dodge", "Ram", 1984);

var Pickup = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};
Pickup.prototype = new Car();
Pickup.prototype.description = function () {
    return "I like mud";
};
var pickup = new Pickup("Dodge", "Ram", 1984);
