export class Car {
    constructor(isParked) {
        this.isParked = isParked;
    }
    drive() { }
    refuel(amount) {
        console.log(`tank is refueled with ${amount} liters`);
    }
    lock() {
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
        }
        else {
            console.log("Car is not parked.");
        }
    }
}
