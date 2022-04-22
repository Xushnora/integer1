// problem 1

// let a = 30;
// let b = 0;
// for (let i = 0; i <= a; i++) {
//     if(a % i == 0) {
//         b++;
//         console.log(i);
//     }
// }


// problem 2

// let a = 15;
// let count = 0;
// for (let i = 0; i <= a; i++) {
//     if(a % i == 0) {
//         count += i;
//     }
// }
// console.log(count);


// problem 3


// let a = 56;
// let count = 0;
// for (let i = 0; i < a; i++) {
//     if(a % i == 0) {
//         count += i;
//     }
// }
// if (a == count) {
//     console.log("perfect");
// } else {
//     console.log("no perfect");
// }


// problem 4


// let a = 1000;
// let result = 0;
// for (let i = 1; i < a; i++) {
//     let count = 0;
//     for (let j = 1; j < i; j++) {
//         if(i % j == 0) {
//             count += j;
//         }
//     }
//     if (count == i) {
//         result += 1;
//         console.log(count);
//     }
// }
// console.log("perfect numbers:",result, "ta");


// problem 5

// let n = 35;
// for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log(i);
//     }
// }



// tub son problem 6

// let a = 29;
// let b = 1;
// for (let i = 0; i <= a; i++) {
//     if (a % i != 0){
//         b++;
//     }
// }
// if (a == 1) {
//     console.log("Tub ham, murakkab ham emas");
// } else if (a == b) {
//     console.log("Tub son");
// } else {
//     console.log("Tub emas");
// }



// problem 7


// let n = 20;
// for (let i = 1; i < n; i++) {
//     let b = 0;
//     for (let j = 1; j < i; j++) {
//         if (i % j == 0){
//             b++;
//         }
//     }  
//     if (b == 1) console.log(i);
// }


// problem 7

// let num = 20
// for (let index = 1; index < num; index++) {
//     let count = 0
//     for (let i = 1; i < index; i++) {
//         if(index%i==0){
//         count++;
//         }
//     }
//     if(count==1) console.log(index);
// }


// problem 8

// let limit = 30;
// let a, b, c = 0;
// let m = 2;
// while (c < limit)
//     {
//     for(let n = 1; n < m; n++){
//         a = m * m - n * n;
//         b = 2 * m * n;
//         c = m * m + n * n;
//         if (c > limit)
//             break;
//             console.log(a + " " + b + " " + c);
//     }
//     m++;
// }

// let n = 30;

// for (let a = 1; a < n; a++) {
//     for (let b = 1; b < n; a++) {
//         for (let c = 1; c < n; c++) {
//             if()
//         }
//     }
// }


