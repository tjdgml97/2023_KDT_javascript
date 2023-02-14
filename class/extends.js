class Car{
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  }
}

// 클래스 상속 
class ElecCar extends Car {
  constructor(brand,color, fuel) {
    super(brand);
    this.fuel = fuel;
  }

//  부모의 메소드를 바꾼는것이 overriding 
  showSpec(){
    super.showSpec();
    console.log(`그리고 ! ${this.brand}의 ${this.color}색 자동차가 ${this.color}색 자동차가 ${this.fuel}로 움직임`)
  }
}

const hyundai = new Car('hyundai','blue');
hyundai.showSpec();

const tesla = new ElecCar('tesla','electricity');
tesla.showSpec();

tesla.drive();

// instance of 상속 여부 확인가능 
console.log(hyundai instanceof Car);
console.log(hyundai instanceof ElecCar);
console.log(tesla instanceof Object);


