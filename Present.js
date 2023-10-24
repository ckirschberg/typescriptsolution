"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Present = void 0;
var Present = /** @class */ (function () {
    function Present(name, weight, presentType) {
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    Present.prototype.getPresentType = function () {
        return this.presentType;
    };
    Present.prototype.getWeight = function () {
        return this.weight;
    };
    Present.prototype.print = function () {
        console.log(this.name + " " + this.weight + " " + this.presentType);
    };
    return Present;
}());
exports.Present = Present;
