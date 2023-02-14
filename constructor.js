function Kdt(name, gender) {
  this.name= name;
  this.gender = gender;
  this.showInfo = function(){
    console.log(`이름: ${this.name} 성별 : ${this.gender} `);
  }
}

let user1 = new Kdt("성재","M");
let user2 = new Kdt("성범","M");
let user3 = new Kdt("성희","F");
let user4 = new Kdt("수빈","F");

user1.showInfo();
user2.showInfo();
user3.showInfo();
user4.showInfo();