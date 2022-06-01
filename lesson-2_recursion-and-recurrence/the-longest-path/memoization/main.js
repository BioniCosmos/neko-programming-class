'use strict'

const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin })

let n = 0
let t = new Array(),
    rec = new Array()

rl.on('line', input => {
    if (n === 0) {
        n = parseInt(input)
    } else {
        const values = input.split(' ')
        const len = values.length
        for (let i = 0; i < len; i++) {
            values[i] = parseInt(values[i])
        }

        t[len - 1] = values
        rec[len - 1] = new Array(len).fill(-1)

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
    if (rec[i][j] === -1) {
        rec[i][j] = max(getTheLongest(i + 1, j, rec), getTheLongest(i + 1, j + 1, rec)) + t[i][j]
    }
    return rec[i][j]
}

const max = (x, y) => x < y ? y : x
