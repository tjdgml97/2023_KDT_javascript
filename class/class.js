const hyundai  = new ConstructorCar('hyundai','blue');
// const porsche  = new Car('porsche','black');

console.log(hyundai);
hyundai.drive();

function ConstructorCar(brand,color){
  this.brand  = brand;
  this.color = color;
  this.drive = () =>{
    //  호이스팅 가능 
    console.log(`${this.brand}의 ${this.color}가 주행중`);
  }
}

const porsche =  new ClassCar('porsche','black');
console.log(porsche);
porsche.drive();

// 클래스 버전
class ClassCar {
  constructor(brand,color){
    this.brand = brand;
    this.color= color;
  }
  drive = function() {
    console.log(`${this.brand}의 ${this.color}가 주행중`);
  }
}

