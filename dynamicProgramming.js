let newPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve("this")
    }, 3000)
})

const notMemoizedPlusTen = async (n) => {
    for (let i = 0; i < 2; i++) {
    await newPromise    
    let answer = n + 10;
    console.log(answer)
    }
};
const cache = {}
const memoizedPlusTen = async (n) => {
for (let i = 0; i < 2; i++) {
    if (n in cache) {
        console.log(cache[n])
    }
    else {
        await newPromise
        cache[n] = n + 10
        console.log("waited")
        console.log(cache[n])
    }
};


}
notMemoizedPlusTen(10)
// memoizedPlusTen(10)