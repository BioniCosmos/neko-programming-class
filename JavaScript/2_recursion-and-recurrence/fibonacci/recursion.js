'use strict'

const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin })

rl.on('line', input => {
    console.log(fibonacci(input))
    rl.close()
})

function fibonacci(n) {
    if (n < 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
