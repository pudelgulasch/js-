// print square
// ============

// let array = [];
// let space = [];

// version 1

// const printSquare = x => {
//     for (let i = 0; i < x; i++) {
//         for (let j = 0; j < x; j++) {
//             i === 0 || i === x ? array.push("*") : space.push(" ");
//         }
//         space.pop();
//         i === 0 || i === x - 1 ? console.log(array.join(" ")) : console.log(`*${space.join(" ")}*`);
//         space = [];
//     }
// };

// version 2

// const printSquare = x => {
//     for (let i = 0; i < x; i++) {
//         array.push("*");
//         space.push(" ");
//     }

//     console.log(array.join(" "));

//     space.pop();
//     for (let i = 0; i < x - 2; i++) {
//         console.log(`*${space.join(" ")}*`);
//     }

//     console.log(array.join(" "));
// };

// printSquare(6);

// ************************************************************

// print X
// =======

let topRow = [];
let bottomRow = topRow;
let midRows = [];

let rows = [];

const printX = x => {
    // for (let i = 0; i < x; i++) {
    //     if (i === 0 || i === Math.floor(x / 2)) {
    //         topRow.push("*");
    //     } else {
    //         topRow.push(" ");
    //     }
    // }
    // console.log(topRow.join(" "));
    // for (let j = 0; j < x - 2; j++) {
    //     midRows.push(" ");
    //     midRows.push("*");
    // }
    // console.log(bottomRow.join(" "));

    for (let i = 0; i < x; i++) {
        // rows.push("*");
        for (let j = 0; j < x; j++) {
            j === 0 && rows.push("*");
            j < x - 4 && rows.push(" ");
            j === Math.floor(x / 2) - 2 && rows.push("*");
        }
        console.log(rows.join(" "));
        rows = [];
    }
};

printX(7);