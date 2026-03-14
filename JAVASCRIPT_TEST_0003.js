let n = 6;

for (let i = 1; i <= n; i++) {

    let row = "";
    let num = i % 2;

    for (let j = 1; j <= i; j++) {
        row += num;
        num = 1 - num;
    }

    console.log(row);
}