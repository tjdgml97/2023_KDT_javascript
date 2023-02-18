const fruits = ["사과", "복숭아", "포도", "바나나", "딸기"];

const fruitsObjArr = fruits.map((item, index, origin) => {

  return {
    id: index,
    name: item,
  }

});

// console.log(fruits);
// console.log(fruitsObjArr);

const nums = [3,6,9,12,15,18,21];
const divideArr = nums.map(function (item, index) {
  return item / 3;
});

const divideArrArrow = nums.map((item, index) => item / 3);

console.log(divideArr);

const nums2 = [1,2,3,4,5,6];
const multipleNums2 = nums2.map((item) => {
  let test = "arr";
  return item * 4;
})

console.log(multipleNums2);

const numbers2 = [1, 2, 3, 4, 5, 6];
const filterArr = numbers2.filter((item) => item > 3);

console.log(filterArr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const resultArr = words.filter((item) => item.length > 6);

const numbers4 = [1, 2, 3, 4, 5, 6];

console.log(numbers4.includes(3));
console.log(numbers4.includes(7));