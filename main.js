let objArr = [
  { name: "Thabo", mark: 40 },
  { name: "smith", mark: 33 },
  { name: "Nean", mark: 22 },
];

// This function takes in an array with objects, gets the marks average and from that calculates the class average out of a certain total for a test
const getClassAverage = (arr, m) => {
  let marks = [];
  let ave = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    marks.push(arr[i].mark);
  }
  for (let j = 0; j < marks.length; j++) {
    ave += marks[j];
  }
  let sum = ave / arr.length;
  total = (sum / m) * 100;
  return total;
};
console.log(getClassAverage(objArr, 60));

// This function takes an array with objects, searches for a position using a number given and changes that positions name to a new name given in the function arguments
const editName = (arr, p, str) => {
  arr[p - 1].name = str;
  return arr;
};
console.log(editName(objArr, 2, "Themba"));

// This function takes a string of numbers and letters combined and removes from the string just the letters and returns the total sum of the numbers
const getTotalString = (str) => {
  let ans = 0;
  let regex = /[0-9]/g;
  let newStr = str.match(regex);
  let myAns = newStr.map((x) => Number(x));
  for (let i = 0; i < myAns.length; i++) {
    ans += myAns[i];
  }
  return ans;
};
console.log(getTotalString("4T354B3434234234234"));

let array = ["5", "g", 3, 5, 10, "dfdfdf"];
// This function takes an array of numbers and strings...removes the strings and returns a new array of just numbers including those which were strings converted to numbers
const removeNonNumbers = (arr) => {
  let newArr = [];
  let num = arr.map((x) => Number(x)).filter((i) => i != NaN);
  let num2 = num.map((j) => j.toString());
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] != "NaN") {
      newArr.push(num2[i]);
    }
  }
  return newArr.map((y) => Number(y));
};
console.log(removeNonNumbers(array));
