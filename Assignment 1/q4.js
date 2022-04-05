const d = new Date();

console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);

setInterval(() => {
    const d = new Date();

    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}, 1000);