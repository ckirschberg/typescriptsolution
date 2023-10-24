import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";
import { Santa } from "./Santa";
import { Sled } from "./Sled";

const santa1: Santa = new Santa("Claus", new Date(600, 0, 1));
const sled: Sled = new Sled(santa1);

const bag1 = new Bag(25, BagType.Paper)
const present1 = new Present("Playstation 5", 8, PresentType.Hard);
const present2 = new Present("Socks", 3, PresentType.Soft);

bag1.addPresent(present1);
bag1.addPresent(present2);

sled.addBag(bag1);
sled.addPresent(present2);

sled.print();