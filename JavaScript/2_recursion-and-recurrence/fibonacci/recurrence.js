'use strict'

const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin })

rl.on('line', input => {
    let fibonacci = new Array()
    fibonacci[0] = fibonacci[1] = 1
    for (let i = 2; i <= input; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    console.log(fibonacci[input])
    rl.close()
})
