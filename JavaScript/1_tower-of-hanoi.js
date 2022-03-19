const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin
})

rl.on('line', input => {
    const n = parseInt(input)
    const a = 'A', b = 'B', c = 'C'
    hanoi(n, a, b, c)
    rl.close()
})

function hanoi(n, a, b, c) {
    if (!n) {
        return
    }
    else {
        hanoi(n - 1, a, c, b)
        console.log(a, '->', c)
        hanoi(n - 1, b, a, c)
    }
}
