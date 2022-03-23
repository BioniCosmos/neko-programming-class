'use strict'

const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin })

let n = 0
let t = new Array()

rl.on('line', input => {
    if (n === 0) {
        n = parseInt(input)
    } else {
        const values = input.split(' ')
        for (let i = 0; i < values.length; i++) {
            values[i] = parseInt(values[i])
        }
        t[values.length - 1] = values
        if (t.length === n) {
            console.log(getTheLongest(0, 0))
            rl.close()
        }
    }
})

function getTheLongest(i, j) {
    if (i === n - 1) {
        return t[i][j]
    }
    return max(getTheLongest(i + 1, j), getTheLongest(i + 1, j + 1)) + t[i][j]
}

const max = (x, y) => x < y ? y : x
