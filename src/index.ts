import { IDrivable } from "./IDrivable.js";
import { IRefuelable } from "./IRefuelable.js";
import { Bicycle } from "./Bicycle.js";
import { Car } from "./Car.js";

const bicycle1 = new Bicycle();
bicycle1.drive();
bicycle1.lock();

const car1 = new Car(false);
car1.lock();

car1.displayParkingStatus();

car1.park();

car1.displayParkingStatus();

car1.leaveParking();

car1.displayParkingStatus();

car1.park();

car1.gasStation();

car1.displayParkingStatus();

car1.refuel(50);

car1.leaveGasStation();

car1.displayParkingStatus();
