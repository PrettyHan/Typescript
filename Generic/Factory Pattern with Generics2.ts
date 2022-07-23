interface Car {
  drive(): void;
  park(): void;
}

class Bus implements Car {
  drive(): void {}
  park(): void {}
}

class Taxi implements Car {
  drive(): void {}
  park(): void {}
}

class Suv implements Car {
  drive(): void {}
  park(): void {}
}

class CarFactory {
  static getInstance<T extends Car>(type: { new (): T }): T {
    return new type();
  }
}

const bus = CarFactory.getInstance(bus);
const taxi = CarFactory.getInstance(taxi);
