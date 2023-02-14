// 생성자 함수
function Car(brand, color) {
  this.brand=brand;
  this.color=color;
  this.drive= function() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`)
  }
}

// 생성자 함수로 상속
function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color);
  this.fuel = fuel;

  this.drive = function(){
    console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.color}색 자동차가 ${this.fuel}주행중`)
  }
}

ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;
const tesla  = new ElecCar('tesla','white','electricity');
// 객체를 만들때 카에 있는 prototype을 가져와야 함 ,object 호출, copy 해서 넣어줌 

console.log(tesla instanceof Object);