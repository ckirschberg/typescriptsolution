import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";

export class Bag {
    maxWeight: number;
    bagType: BagType;
    presents: Present[] = []

    constructor(maxWeight: number, bagType: BagType) {
        this.maxWeight = maxWeight;
        this.bagType = bagType;
    }

    addPresent(present: Present) : boolean {
        const doesFit = this.getTotalWeight() + present.getWeight() <= this.maxWeight ;
        const isPaperAndSoft = present.presentType === PresentType.Soft && this.bagType === BagType.Paper;
        if (doesFit && !isPaperAndSoft) {
           this.presents.push(present);
           return true;
        }
        return false;
    }

    getTotalWeight() : number {
        let totalWeight = 0;
        this.presents.forEach(present => {
            totalWeight += present.getWeight()
        })
        return totalWeight;
    }

    print() : void {
        console.log("This bag is of the type " + this.bagType + " and has a max weight of " + this.maxWeight);
        
        this.presents.forEach(present => {
            present.print();
        })
    }

}