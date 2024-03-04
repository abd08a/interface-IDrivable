import { IDrivable } from "./IDrivable.js";
import { IRefuelable } from "./IRefuelable.js";

export class Car implements IDrivable, IRefuelable {
  isParked: boolean;

  constructor(isParked: boolean) {
    this.isParked = isParked;
  }

  drive(): void {}

  refuel(amount: number): void {
    console.log(`tank is refueled with ${amount} liters`);
  }

  lock(): void {
    console.log("car is locked");
  }

  park() {
    this.isParked = true;
    console.log("park the car!");
  }

  leaveParking() {
    this.isParked = false;
    console.log("leave the parking!");
  }

  gasStation() {
    this.isParked = true;
    console.log("fill the tank!");
  }

  leaveGasStation() {
    this.isParked = false;
    console.log("on the road again");
  }

  displayParkingStatus() {
    if (this.isParked) {
      console.log("Car is parked.");
    } else {
      console.log("Car is not parked.");
    }
  }
}
