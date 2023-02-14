// class ElecCar extends Car {
//   constructor(brand,color, fuel) {
//     super(brand);
//     this.fuel = fuel;
//   }

// //  부모의 메소드를 바꾼는것이 overriding 
//   showSpec(){
//     super.showSpec();
//     console.log(`그리고 ! ${this.brand}의 ${this.color}색 자동차가 ${this.color}색 자동차가 ${this.fuel}로 움직임`)
//   }
// }

class Shape {

  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(`넓이:${this.width*this.height}`)
  }
}

class Rectangle extends Shape{
  constructor(width,height) {
    super(width,height);
  }

  getArea(){
    console.log(`사각형 넓이:${this.width*this.height}`)
  }
}

class Triangle   extends Shape{
  constructor(width,height) {
    super(width,height);
  }

  getArea(){
    console.log(`삼각형 넓이:${this.width*this.height/2}`)
  }
}

class Circle  extends Shape{
  constructor(radius){
    super();
    this.radius = radius;
  }

  getArea(){
    console.log(`원 넓이:${this.radius**2*3.14}`)
  }
}

let shape = new Shape(10,10);
let rectangle = new Rectangle(10,10);
let triangle = new Triangle(10,10);
let circle = new Circle(10,10,10);

shape.getArea();
rectangle.getArea();
triangle.getArea();
circle.getArea();
