import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

let tmp = (await rl.question('')).split(' ')
const n = tmp[0]
const balance = tmp[1]
const values = []
const like = []
for (let i = 0; i < n; i++) {
    tmp = (await rl.question('')).split(' ')
    values[i] = Number(tmp[0])
    like[i] = Number(tmp[1])
}
console.log(getFav(n - 1, balance, values, like))
rl.close()

function getFav(i, balance, values, like) {
    if (i === -1 || balance <= 0) {
        return 0
    }
    if (values[i] > balance) {
        return getFav(i - 1, balance, values, like)
    }
    return Math.max(getFav(i - 1, balance, values, like), getFav(i - 1, balance - values[i], values, like) + like[i])
}
