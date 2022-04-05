var arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('The index of this number is:' + i);
    }, 2000);
}