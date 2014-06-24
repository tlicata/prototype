var Cat = function (name) {
    this.name = name;
};
Cat.prototype = {};
Cat.prototype.paws = 4;
Cat.prototype.furry = true;
Cat.prototype.canIPetIt = "not sure";

var HouseCat = function (name) {
    this.name = name;
};
HouseCat.prototype = new Cat();
HouseCat.prototype.canIPetIt = "yes";


var JungleCat = function (name) {
    this.name = name;
};
JungleCat.prototype = new Cat();
JungleCat.prototype.canIPetIt = "no";


var kitty = new HouseCat("Mr. Snuffles");
var lion = new JungleCat("Mr. Bitey");
