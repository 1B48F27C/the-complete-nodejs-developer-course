console.log(`Starting app`)

setTimeout(() => {
    console.log(`Inside of callback`)
}, 2000)

setTimeout(() => {
    console.log(`Inside of callback with 0 timeout`)
}, 0)

console.log(`Finishing app`)