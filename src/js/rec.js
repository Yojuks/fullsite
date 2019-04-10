function rec(num) {
    // var number = num;
    if (num === 1) {
        return num;
    }
    else
        return function rec(num) {
            for (var i = num; i >= 1; i--) {
                console.log(num);
                console.log(i);
            }
        };
}
