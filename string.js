// Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]

// function pushToo(arr, too) {
//   arr.push(too);
//   return arr;
// }
// let push = pushToo([1, 2, 4], 5);
// console.log("Nemsen arr ", push);

// //2. Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]
// let input1 = [];
// let input2 = [1, 2, 3, 4, 5];
// function createNewArray(input1) {
//   let arr = input1.push("1, 2, 3, 4, 5");
// }
// let nemsenArr = createNewArray(input1);
// console.log("Oruulsan arr ", nemsenArr);

// // 3. Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
// let tuhainToo = prompt("Too oruulna uu");
// let tooArr = tuhainToo.split(" ");

// function tooBolgoh(n) {
//   let newArr = [];
//   for (let i = 0; i < tooArr.length; i++) {
//     newArr.push(Number(tooArr[i]));
//   }
//   return newArr;
// }

// let newarray = tooBolgoh(tooArr);
// console.log("Too bolson arr", newarray);

// function findAvg(utga) {
//   let sum = 0;
//   let avg = 0;
//   for (let i = 0; i < newarray.length; i++) {
//     sum += newarray[i];
//   }
//   dundaj = sum / newarray.length;
//   return dundaj;
// }
// let AvgToo = findAvg(newarray);
// console.log("Dundaj too ", AvgToo);

// 4. Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
let input = "the quick brown fox";
let spl = input.split(" ");
function leftchars(utga) {
  let newWord = "";
  for (let i = 0; i < spl.length; i++) {
    let leftChars = 0;
    leftChars = spl[i].slice(1);
    let firstLetter = spl[i].charAt(0).toUpperCase();
    newWord = newWord + firstLetter + leftChars + " ";
  }
  return newWord;
}
let s = leftchars(input);
console.log("Ehnii useg tom ", s);

// 5. Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
// let input3 = ["hello", "world", "javascript", "array"];
// console.log(input3);
// function reverseArr(utga) {
//   input3.r;
//   for (i = 0; i < input3.length; i++) {
//     urvuu = input3[i];
//     console.log(urvuu);
//   }
//   return urvuu;
// }
// let reversed = reverse(input3);
// console.log(reversed);

// 6. Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
// function findWord(arr, utga) {
//   let findingWord = "";
//   for (i = 0; i < arr.length; i++) {
//     findingWord = arr.includes(utga);
//   }
//   if ((findingWord = utga)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let result = prompt("animal");
// let haruulah = findWord("animal world", result);
// console.log("Ugugdsun utga taarch bgaa eseh", haruulah);

// 7. Дэлгүүрийн боруулалтын мэдэээл өгөгдсөн.

// productName, unitPrice, amount, price, casherId(Ajiltanii dugaar), date гэсэн мэдээлэл агуулна.

// Өгөгдлийг өөрсдөө зохионо.
const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 101,
    date: "2022-11-01",
  },

  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54000,
    casherId: 102,
    date: "2022-11-01",
  },
  {
    productName: "Blueberry",
    unitPrice: 8000,
    amount: 100,
    totalPrice: 800000,
    casherId: 103,
    date: "2022-11-01",
  },
  {
    productName: "Strawberry",
    unitPrice: 9000,
    amount: 50,
    totalPrice: 900000,
    casherId: 104,
    date: "2022-11-01",
  },
  {
    productName: "Banana",
    unitPrice: 5000,
    amount: 300,
    totalPrice: 50000,
    casherId: 105,
    date: "2022-11-01",
  },
  {
    productName: "Bread",
    unitPrice: 5000,
    amount: 700,
    totalPrice: 20000,
    casherId: 106,
    date: "2022-11-01",
  },
  {
    productName: "Soda",
    unitPrice: 3000,
    amount: 300,
    totalPrice: 10000,
    casherId: 107,
    date: "2022-11-01",
  },
  {
    productName: "hot dog",
    unitPrice: 10000,
    amount: 100,
    totalPrice: 1000000,
    casherId: 108,
    date: "2022-11-01",
  },
  {
    productName: "Burger",
    unitPrice: 10000,
    amount: 150,
    totalPrice: 1500000,
    casherId: 109,
    date: "2022-11-01",
  },
  {
    productName: "Coffee",
    unitPrice: 7000,
    amount: 500,
    totalPrice: 5000000,
    casherId: 110,
    date: "2022-11-01",
  },
];
// Нийт борлуулалтын дүнг тооцоолох.
function totalSale(datas) {
  let totalSum = 0;
  for (i = 0; i < datas.length; i++) {
    totalSum += datas[i].totalPrice;
  }
  return totalSum;
}
let niitDun = totalSale(data);
console.log("Zaragdsan baraanii niit dun", niitDun);

// Нийт борлуулагдсан барааны тоог тооцоолох.
function totalAmount(tooShirheg) {
  let niitToo = 0;
  for (i = 0; i < tooShirheg.length; i++) {
    niitToo += tooShirheg[i].amount;
  }
  return niitToo;
}
let totalTooShirheg = totalAmount(data);
console.log("Niit zaragdsan baraanii too ", totalTooShirheg);

// . Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
function mostSold(sold) {
  console.log(sold);
  let product = [...sold];
  const maxPro = product
    .sort(function (a, b) {
      return b.amount - a.amount;
    })
    .slice(0, 5);

  return maxPro;
}

let top5pro = mostSold(data);
console.log(top5pro);
