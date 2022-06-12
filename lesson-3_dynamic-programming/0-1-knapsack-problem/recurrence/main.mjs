import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

let tmp = (await rl.question('')).split(' ')
const n = tmp[0]
const balance = tmp[1]
const values = []
const like = []
const fav = Array.from({ length: balance + 1 }, () => 0)
for (let i = 0; i < n; i++) {
    tmp = (await rl.question('')).split(' ')
    values[i] = Number(tmp[0])
    like[i] = Number(tmp[1])
}
for (let i = 1; i <= balance; i++) {
    if (values[0] <= i) {
        fav[i] = like[0];
    }
}
for (let i = 1; i < n; i++) {
    for (let j = balance; j >= 1; j--) {
        if (values[i] <= j) {
            fav[j] = Math.max(fav[j], fav[j - values[i]] + like[i]);
        }
    }
}
console.log(fav[balance])
rl.close()
