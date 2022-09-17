function friendsPair(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    return friendsPair(n - 1) + friendsPair(n - 2) * (n - 1);
}

console.log(friendsPair(4));