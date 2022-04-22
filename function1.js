
// function minmax(x, y) {
//     if (x<y) {
//         return x, y;
//     } else {
//         return y, x;
//     }
// }


function minMax(a, b, c, d) {
    if (a > b && a > c && a > d) {
        console.log(a);
    } else if (b > a && b > c && b > d) {
       console.log(b);
    } else if (c > a && c > b && c > d) {
        console.log(c);
    } else if (d > a && d > b && d > c) {
        console.log(d);
    } else if (a < b && a < c && a < d) {
        console.log(a);
    } else if (b < a && b < c && b < d) {
        console.log(b);
    } else if (c < b && c < a && c < d) {
        console.log(c);
    } else if (d < b && d < c && d < a) {
        console.log(d);
    }

}

minMax(12, 14, 2, 9);
