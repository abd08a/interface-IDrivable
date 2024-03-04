import { IDrivable } from "./IDrivable.js";

export class Bicycle implements IDrivable {
  drive(): void {
    console.log("is not drivable");
  }

  lock(): void {
    console.log("is locked");
  }
}
