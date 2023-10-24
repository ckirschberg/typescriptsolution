"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bag = void 0;
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        this.presents = [];
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }
    Bag.prototype.addPresent = function (present) {
        var doesFit = this.getTotalWeight() + present.getWeight() <= this.maxWeight;
        var isPaperAndSoft = present.presentType === PresentType_1.PresentType.Soft && this.bagType === BagType_1.BagType.Paper;
        if (doesFit && !isPaperAndSoft) {
            this.presents.push(present);
            return true;
        }
        return false;
    };
    Bag.prototype.getTotalWeight = function () {
        var totalWeight = 0;
        this.presents.forEach(function (present) {
            totalWeight += present.getWeight();
        });
        return totalWeight;
    };
    Bag.prototype.print = function () {
        console.log("This bag is of the type " + this.bagType + " and has a max weight of " + this.maxWeight);
        this.presents.forEach(function (present) {
            present.print();
        });
    };
    return Bag;
}());
exports.Bag = Bag;
