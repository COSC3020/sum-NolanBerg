function sum(a) {
    if (!Array.isArray(a)) {
        return 0;
    }
    var s = 0;
    for(var i = 0; i < a.length; i++) {
        s += a[i];
    }
    return s;
}
