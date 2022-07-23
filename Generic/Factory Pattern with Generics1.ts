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

class CarFactory {
  static getInstance(type: String): Car {
    // car의 type이 추가될 때마다, case 문을 추가해야 하는 단점
    switch (type) {
      case "bus":
        return new Bus();
      default:
        return new Taxi();
    }
  }
}

const bus = CarFactory.getInstance("bus");
const taxi = CarFactory.getInstance("taxi");
// 미적용
