import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { Santa } from "./Santa";

export class Sled {
    santa: Santa;
    bags: Bag[] = [];

    constructor(santa: Santa) {
        this.santa = santa;
    }

    addPresent(present: Present) : void {
        if (this.bags.length > 0) {
            const result = this.bags[this.bags.length-1].addPresent(present);
            if (!result) {
                this.addDefaultBagAndPresent(present);
                // const bag = new Bag(10, BagType.Canvas);
                // bag.addPresent(present);
                // this.addBag(bag);
            }
        } else {
            this.addDefaultBagAndPresent(present);
            // const bag = new Bag(10, BagType.Canvas);
            // bag.addPresent(present);
            // this.addBag(bag);
        }

    }

    private addDefaultBagAndPresent(present: Present) : void {
        const bag = new Bag(10, BagType.Canvas);
        bag.addPresent(present);
        this.addBag(bag);
    }

    addBag(bag: Bag) : void {
        this.bags.push(bag);
    }
    setSanta(santa: Santa) : void {
        this.santa = santa;
    }
    print(): void {
        console.log("This is " + this.santa.name + "'s sled and santa is " + 
        (new Date().getFullYear() - this.santa.birthdate.getFullYear()) + " years old");
        
        this.bags.forEach(bag => {
            bag.print();
        })
    }
}