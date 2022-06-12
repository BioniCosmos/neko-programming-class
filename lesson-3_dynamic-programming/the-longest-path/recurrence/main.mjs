import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

const n = await rl.question('')
const t = Array.from({ length: n }, () => [])
const theLongest = Array.from({ length: n }, () => [])
for (let i = 0; i < n; i++) {
    const tmp = (await rl.question('')).split(' ')
    for (const [j, v] of tmp.entries()) {
        t[i][j] = Number(v)
    }
}
for (let i = 0; i < n; i++) {
    theLongest[n - 1][i] = t[n - 1][i]
}
for (let i = n - 2; i >= 0; i--) {
    for (const [j, v] of t[i].entries()) {
        theLongest[i][j] = Math.max(theLongest[i + 1][j], theLongest[i + 1][j + 1]) + v
    }
}
console.log(theLongest[0][0])
rl.close()
