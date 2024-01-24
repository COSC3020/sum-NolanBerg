function sum(a) {
    if (a.length === 0) {
        return 0;
    }
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
